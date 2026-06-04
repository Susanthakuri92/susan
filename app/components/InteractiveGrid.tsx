'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  twinkleSpeed: number;
  twinklePhase: number;
  baseAlpha: number;
  isStatic: boolean;
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
        const brightness = Math.random();
        let size: number, baseAlpha: number;
        if (brightness < 0.7) {
          size = Math.random() * 0.6 + 0.3;
          baseAlpha = Math.random() * 0.2 + 0.15;
        } else if (brightness < 0.92) {
          size = Math.random() * 0.8 + 0.6;
          baseAlpha = Math.random() * 0.3 + 0.35;
        } else {
          size = Math.random() * 1.2 + 1;
          baseAlpha = Math.random() * 0.3 + 0.7;
        }
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size, twinkleSpeed: Math.random() * 1.5 + 0.3,
          twinklePhase: Math.random() * Math.PI * 2,
          baseAlpha, isStatic: Math.random() < 0.3,
        });
      }
      return stars;
    };

    const generatePlanets = (w: number, h: number) => {
      const isMobile = w < 768;
      const cx = isMobile ? w : w * 0.7;
      const cy = isMobile ? h * 0.35 : h * 0.4;
      const maxR = Math.min(w, h) * (isMobile ? 0.22 : 0.35);

      return [
        { name: 'mercury', orbitRx: maxR * 0.18, orbitRy: maxR * 0.12, speed: 0.45, phase: 0, size: 2, color: '#b5b5b5', label: '' },
        { name: 'venus', orbitRx: maxR * 0.28, orbitRy: maxR * 0.19, speed: 0.35, phase: 1.2, size: 4, color: '#e8c87a', label: '' },
        { name: 'earth', orbitRx: maxR * 0.38, orbitRy: maxR * 0.26, speed: 0.28, phase: 2.8, size: 5, color: '#6b93d6', label: '' },
        { name: 'mars', orbitRx: maxR * 0.48, orbitRy: maxR * 0.33, speed: 0.22, phase: 4.1, size: 3, color: '#c47a5a', label: '' },
        { name: 'jupiter', orbitRx: maxR * 0.6, orbitRy: maxR * 0.42, speed: 0.12, phase: 0.7, size: 12, color: '#d4a574', label: '' },
        { name: 'saturn', orbitRx: maxR * 0.72, orbitRy: maxR * 0.5, speed: 0.09, phase: 3.3, size: 10, color: '#e8d5a0', label: '' },
        { name: 'uranus', orbitRx: maxR * 0.84, orbitRy: maxR * 0.58, speed: 0.06, phase: 5.0, size: 7, color: '#7ac8d4', label: '' },
        { name: 'neptune', orbitRx: maxR * 0.95, orbitRy: maxR * 0.65, speed: 0.04, phase: 2.0, size: 6, color: '#4a6a9e', label: '' },
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
      solarCxRef.current = w < 768 ? w : w * 0.7;
      solarCyRef.current = w < 768 ? h * 0.35 : h * 0.4;

      ctx.clearRect(0, 0, w, h);

      // Stars
      for (const s of starsRef.current) {
        let a = s.baseAlpha;
        if (!s.isStatic) {
          a *= 0.7 + 0.3 * (0.5 + 0.5 * Math.sin(t * s.twinkleSpeed + s.twinklePhase));
        }
        if (a < 0.05) continue;
        ctx.fillStyle = `rgba(255, 255, 255, ${a})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      const cx = solarCxRef.current;
      const cy = solarCyRef.current;
      const precession = t * 0.004 + Math.PI / 5;

      // Orbit rings
      ctx.font = '9px monospace';
      for (const p of planetsRef.current) {
        ctx.strokeStyle = `rgba(255, 255, 255, 0.08)`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.ellipse(cx, cy, p.orbitRx, p.orbitRy, precession, 0, Math.PI * 2);
        ctx.stroke();

        // Planet position
        const angle = t * p.speed + p.phase;
        const cosR = Math.cos(precession);
        const sinR = Math.sin(precession);
        const px = cx + p.orbitRx * Math.cos(angle) * cosR - p.orbitRy * Math.sin(angle) * sinR;
        const py = cy + p.orbitRx * Math.cos(angle) * sinR + p.orbitRy * Math.sin(angle) * cosR;

        // Glow behind planet
        const glowR = Math.max(p.size * 2, 6);
        const grad = ctx.createRadialGradient(px, py, 0, px, py, glowR);
        grad.addColorStop(0, `rgba(255, 255, 255, 0.1)`);
        grad.addColorStop(1, `rgba(255, 255, 255, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, p.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Planet body
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Saturn ring
        if (p.name === 'saturn') {
          ctx.strokeStyle = 'rgba(232, 213, 160, 0.4)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(px, py, p.size * 1.8, p.size * 0.4, 0.3, 0, Math.PI * 2);
          ctx.stroke();
        }

      }

      // Sun
      const sunGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60);
      sunGrad.addColorStop(0, 'rgba(255, 200, 130, 0.6)');
      sunGrad.addColorStop(0.2, 'rgba(255, 180, 100, 0.25)');
      sunGrad.addColorStop(0.5, 'rgba(255, 160, 80, 0.08)');
      sunGrad.addColorStop(1, 'rgba(255, 160, 80, 0)');
      ctx.fillStyle = sunGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 60, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(255, 210, 160, 0.7)';
      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
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
