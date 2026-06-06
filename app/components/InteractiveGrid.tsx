'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  twinklePhase: number;
  baseAlpha: number;
  twinkleStrength: number;
  freq: [number, number, number];
}

interface Planet {
  name: string;
  orbitRx: number;
  orbitRy: number;
  speed: number;
  phase: number;
  size: number;
  color: string;
  label: string;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  length: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingRef = useRef<ShootingStar[]>([]);
  const planetsRef = useRef<Planet[]>([]);
  const rafRef = useRef<number>(0);
  const spawnTimerRef = useRef<number>(0);
  const solarCxRef = useRef(0);
  const solarCyRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const generateStars = (w: number, h: number) => {
      const stars: Star[] = [];
      const count = Math.floor((w * h) / 10000);
      for (let i = 0; i < count; i++) {
        const r = Math.random();
        let size: number, baseAlpha: number, twinkleStrength: number;
        if (r < 0.55) {
          size = Math.random() * 0.6 + 0.3;
          baseAlpha = Math.random() * 0.2 + 0.15;
          twinkleStrength = 0.3 + Math.random() * 0.4;
        } else if (r < 0.85) {
          size = Math.random() * 0.8 + 0.6;
          baseAlpha = Math.random() * 0.3 + 0.35;
          twinkleStrength = 0.5 + Math.random() * 0.5;
        } else {
          size = Math.random() * 1.2 + 1;
          baseAlpha = Math.random() * 0.3 + 0.7;
          twinkleStrength = 0.7 + Math.random() * 0.3;
        }
        const f1 = 0.3 + Math.random() * 0.8;
        const f2 = 1.0 + Math.random() * 2.0;
        const f3 = 3.0 + Math.random() * 5.0;
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size,
          twinklePhase: Math.random() * Math.PI * 2,
          baseAlpha,
          twinkleStrength,
          freq: [f1, f2, f3],
        });
      }
      return stars;
    };

    const generatePlanets = (w: number, h: number) => {
      const isMobile = w < 768;
      const cx = isMobile ? w * 0.9 : w * 0.7;
      const cy = isMobile ? h * 0.3 : h * 0.4;
      const maxR = Math.min(w, h) * (isMobile ? 0.12 : 0.35);

      return [
        { name: 'mercury', orbitRx: maxR * 0.18, orbitRy: maxR * 0.12, speed: 0.45, phase: 0, size: 2, color: '#a09a94', label: '' },
        { name: 'venus', orbitRx: maxR * 0.28, orbitRy: maxR * 0.19, speed: 0.35, phase: 1.2, size: 4, color: '#edd9a0', label: '' },
        { name: 'earth', orbitRx: maxR * 0.38, orbitRy: maxR * 0.26, speed: 0.28, phase: 2.8, size: 5, color: '#4a8fc5', label: '' },
        { name: 'mars', orbitRx: maxR * 0.48, orbitRy: maxR * 0.33, speed: 0.22, phase: 4.1, size: 3, color: '#c1440e', label: '' },
        { name: 'jupiter', orbitRx: maxR * 0.6, orbitRy: maxR * 0.42, speed: 0.12, phase: 0.7, size: 12, color: '#c9a06c', label: '' },
        { name: 'saturn', orbitRx: maxR * 0.72, orbitRy: maxR * 0.5, speed: 0.09, phase: 3.3, size: 10, color: '#d4b86a', label: '' },
        { name: 'uranus', orbitRx: maxR * 0.84, orbitRy: maxR * 0.58, speed: 0.06, phase: 5.0, size: 7, color: '#7ec8d4', label: '' },
        { name: 'neptune', orbitRx: maxR * 0.95, orbitRy: maxR * 0.65, speed: 0.04, phase: 2.0, size: 6, color: '#3f5ab5', label: '' },
      ];
    };

    const spawnShootingStar = (w: number, h: number) => {
      const angle = Math.PI / 4 + Math.random() * Math.PI / 3;
      const speed = 300 + Math.random() * 400;
      const side = Math.floor(Math.random() * 4);
      let x: number, y: number;
      if (side === 0) { x = Math.random() * w; y = -20; }
      else if (side === 1) { x = w + 20; y = Math.random() * h; }
      else if (side === 2) { x = Math.random() * w; y = h + 20; }
      else { x = -20; y = Math.random() * h; }

      shootingRef.current.push({
        x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        life: 0, maxLife: 0.6 + Math.random() * 0.4, length: 40 + Math.random() * 60,
      });
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
      starsRef.current = generateStars(window.innerWidth, window.innerHeight);
      planetsRef.current = generatePlanets(window.innerWidth, window.innerHeight);
    };

    resize();
    window.addEventListener('resize', resize);
    spawnTimerRef.current = 0;

    const animate = (timestamp: number) => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const t = timestamp / 1000;
      solarCxRef.current = w < 768 ? w * 0.9 : w * 0.7;
      solarCyRef.current = w < 768 ? h * 0.3 : h * 0.4;

      ctx.clearRect(0, 0, w, h);

      // Stars
      for (const s of starsRef.current) {
        let a = s.baseAlpha;
        // Multi-frequency twinkle for natural-looking flicker
        const v = Math.sin(t * s.freq[0] + s.twinklePhase) * 0.5
                + Math.sin(t * s.freq[1] + s.twinklePhase + 1.7) * 0.3
                + Math.sin(t * s.freq[2] + s.twinklePhase + 3.1) * 0.2;
        const raw = (v + 1) * 0.5;
        // Asymmetric shaping: stars spend more time dim with occasional bright flashes
        const shaped = Math.pow(raw, 2.0);
        a *= 1 - s.twinkleStrength * 0.6 + s.twinkleStrength * 0.9 * shaped;
        if (a < 0.05) continue;
        ctx.fillStyle = `rgba(255, 255, 255, ${a})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      const cx = solarCxRef.current;
      const cy = solarCyRef.current;
      const precession = t * 0.004 + (w < 768 ? -Math.PI / 4 : Math.PI / 5);

      // Orbit rings (hidden on mobile to reduce clutter)
      if (w >= 768) {
        ctx.font = '9px monospace';
        for (const p of planetsRef.current) {
          ctx.strokeStyle = `rgba(255, 255, 255, 0.08)`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.ellipse(cx, cy, p.orbitRx, p.orbitRy, precession, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      for (const p of planetsRef.current) {
        // Planet position
        const angle = t * p.speed + p.phase;
        const cosR = Math.cos(precession);
        const sinR = Math.sin(precession);
        const px = cx + p.orbitRx * Math.cos(angle) * cosR - p.orbitRy * Math.sin(angle) * sinR;
        const py = cy + p.orbitRx * Math.cos(angle) * sinR + p.orbitRy * Math.sin(angle) * cosR;

        // Soft ambient glow
        const glowR = Math.max(p.size * 2, 6);
        const agrad = ctx.createRadialGradient(px, py, 0, px, py, glowR);
        agrad.addColorStop(0, `rgba(255, 255, 255, 0.08)`);
        agrad.addColorStop(1, `rgba(255, 255, 255, 0)`);
        ctx.fillStyle = agrad;
        ctx.beginPath();
        ctx.arc(px, py, glowR, 0, Math.PI * 2);
        ctx.fill();

        // Planet body
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Planet highlight for 3D spherical look
        const hGrad = ctx.createRadialGradient(
          px - p.size * 0.3, py - p.size * 0.3, 0,
          px, py, p.size
        );
        hGrad.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
        hGrad.addColorStop(0.4, 'rgba(255, 255, 255, 0.05)');
        hGrad.addColorStop(1, 'rgba(0, 0, 0, 0.2)');
        ctx.fillStyle = hGrad;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Saturn ring
        if (p.name === 'saturn') {
          ctx.save();
          ctx.strokeStyle = 'rgba(200, 180, 140, 0.5)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.ellipse(px, py, p.size * 2.2, p.size * 0.35, 0.3, 0, Math.PI * 2);
          ctx.stroke();
          ctx.strokeStyle = 'rgba(200, 180, 140, 0.25)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.ellipse(px, py, p.size * 2.6, p.size * 0.45, 0.3, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

      }

      // Sun - outer corona glow
      const sunScale = w < 768 ? 0.5 : 1;
      const coronaGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 80 * sunScale);
      coronaGrad.addColorStop(0, 'rgba(255, 200, 130, 0.3)');
      coronaGrad.addColorStop(0.3, 'rgba(255, 180, 100, 0.12)');
      coronaGrad.addColorStop(0.6, 'rgba(255, 160, 80, 0.04)');
      coronaGrad.addColorStop(1, 'rgba(255, 160, 80, 0)');
      ctx.fillStyle = coronaGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 80 * sunScale, 0, Math.PI * 2);
      ctx.fill();

      // Sun - inner glow
      const innerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40 * sunScale);
      innerGrad.addColorStop(0, 'rgba(255, 220, 150, 0.8)');
      innerGrad.addColorStop(0.4, 'rgba(255, 190, 110, 0.35)');
      innerGrad.addColorStop(1, 'rgba(255, 170, 90, 0)');
      ctx.fillStyle = innerGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 40 * sunScale, 0, Math.PI * 2);
      ctx.fill();

      // Sun - core
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 18 * sunScale);
      coreGrad.addColorStop(0, 'rgba(255, 230, 190, 0.9)');
      coreGrad.addColorStop(0.5, 'rgba(255, 210, 150, 0.7)');
      coreGrad.addColorStop(1, 'rgba(255, 180, 100, 0.4)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 18 * sunScale, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx, cy, 18 * sunScale, 0, Math.PI * 2);
      ctx.fill();

      // Shooting stars
      shootingRef.current = shootingRef.current.filter(s => s.life < s.maxLife);
      for (const s of shootingRef.current) {
        s.x += s.vx * 0.016;
        s.y += s.vy * 0.016;
        s.life += 0.016;
        const progress = s.life / s.maxLife;
        const alpha = Math.sin(progress * Math.PI) * 0.9;

        const tailLen = s.length / Math.hypot(s.vx, s.vy);
        const tailX = s.x - s.vx * tailLen;
        const tailY = s.y - s.vy * tailLen;

        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        grad.addColorStop(1, `rgba(255, 255, 255, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      spawnTimerRef.current += 0.016;
      if (spawnTimerRef.current > 18 + Math.random() * 6) {
        spawnShootingStar(w, h);
        spawnTimerRef.current = 0;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}
