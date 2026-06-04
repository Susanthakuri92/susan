'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CV() {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--fg)', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-8 md:py-10 print:px-0 print:py-0"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        {/* Top bar */}
        <div className="flex justify-between items-center mb-6 print:hidden">
          <Link href="/" className="text-[10px] uppercase tracking-[0.3em] font-mono transition-all duration-300 hover:text-[var(--accent)]" style={{ color: 'var(--fg-dim)' }}>
            ← Back
          </Link>
          <button onClick={() => window.print()} className="text-[10px] uppercase tracking-[0.3em] font-mono px-4 py-2 rounded-[6px] transition-all duration-300 hover:bg-white/10" style={{ border: '1px solid var(--border)', color: 'var(--fg-muted)' }}>
            Print / PDF
          </button>
        </div>

        {/* --- CV CARD --- */}
        <div
          className="relative"
          style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '2px' }}
        >
          {/* Hover border */}
          <div className="pointer-events-none absolute print:hidden" style={{ inset: '-1px' }}>
            <div className="absolute transition-all duration-500 ease-out" style={{ top: '-1px', left: '50%', height: '1px', backgroundColor: 'rgba(255,255,255,0.35)', opacity: hovered ? 1 : 0, width: hovered ? '100%' : '0%', transform: 'translateX(-50%)', transitionDelay: hovered ? '0ms' : '200ms' }} />
            <div className="absolute transition-all duration-500 ease-out" style={{ bottom: '-1px', left: '50%', height: '1px', backgroundColor: 'rgba(255,255,255,0.35)', opacity: hovered ? 1 : 0, width: hovered ? '100%' : '0%', transform: 'translateX(-50%)', transitionDelay: hovered ? '100ms' : '100ms' }} />
            <div className="absolute transition-all duration-500 ease-out" style={{ left: '-1px', top: '50%', width: '1px', backgroundColor: 'rgba(255,255,255,0.35)', opacity: hovered ? 1 : 0, height: hovered ? '100%' : '0%', transform: 'translateY(-50%)', transitionDelay: hovered ? '200ms' : '0ms' }} />
            <div className="absolute transition-all duration-500 ease-out" style={{ right: '-1px', top: '50%', width: '1px', backgroundColor: 'rgba(255,255,255,0.35)', opacity: hovered ? 1 : 0, height: hovered ? '100%' : '0%', transform: 'translateY(-50%)', transitionDelay: hovered ? '300ms' : '300ms' }} />
          </div>

          <div className="px-8 py-8 md:px-12 md:py-10">
            {/* --- HEADER --- */}
            <div className="mb-8 pb-6" style={{ borderBottom: '1px solid var(--border)' }}>
              <div className="text-xs font-mono mb-3" style={{ color: 'var(--accent)' }}>Hello, I'm</div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                Susan Thakuri
              </h1>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-mono mb-4" style={{ color: 'var(--fg-dim)' }}>
                <span>Lalitpur, Nepal</span>
                <span>susanthakuri92@gmail.com</span>
                <span>+977 9845795571</span>
              </div>
              <p className="text-sm max-w-xl leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                Learning to build for the web, one project at a time. Curious about how things work — and why they break.
              </p>
            </div>

            {/* --- CONTENT --- */}
            <div className="grid md:grid-cols-5 gap-6">
              {/* Main */}
              <div className="md:col-span-3 space-y-6">
                <section>
                  <h2 className="text-[9px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--accent)' }}>01. Skills</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { l: 'HTML & CSS', n: 3 },
                      { l: 'JavaScript', n: 2 },
                      { l: 'React / Next.js', n: 2 },
                      { l: 'Tailwind CSS', n: 3 },
                      { l: 'Git / GitHub', n: 2 },
                      { l: 'TypeScript', n: 1 },
                      { l: 'Linux', n: 2 },
                    ].map(s => (
                      <div key={s.l}>
                        <div className="text-sm">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-[9px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--accent)' }}>02. Projects</h2>
                  <div className="space-y-4">
                    {[
                      { t: 'Portfolio', d: 'Experimenting with layouts, interactivity, and the starfield background you see here.', tag: 'Next.js / Tailwind' },
                      { t: 'Small Web Experiments', d: 'Tiny projects exploring the basics — HTML, CSS, and vanilla JS.', tag: 'HTML / CSS / JS' },
                      { t: 'Current Studies', d: 'Focusing on React state, component architecture, and making things that work.', tag: 'React / Next.js' },
                    ].map(p => (
                      <div key={p.t} className="relative pl-4" style={{ borderLeft: '2px solid var(--border)' }}>
                        <div className="text-sm font-medium">{p.t}</div>
                        <div className="text-xs mt-0.5" style={{ color: 'var(--fg-muted)' }}>{p.d}</div>
                        <div className="text-[8px] font-mono uppercase tracking-wider mt-0.5" style={{ color: 'var(--fg-faint)' }}>{p.tag}</div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-2 space-y-6">
                <section>
                  <h2 className="text-[9px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--accent)' }}>03. Education</h2>
                  <div className="text-sm font-medium">BCA</div>
                  <div className="text-xs" style={{ color: 'var(--fg-muted)' }}>Tribhuvan University, Nepal</div>
                  <span className="inline-block text-[8px] font-mono uppercase tracking-wider mt-1.5 px-2 py-0.5" style={{ border: '1px solid var(--border)', color: 'var(--fg-faint)' }}>Completed</span>
                </section>

                <section>
                  <h2 className="text-[9px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--accent)' }}>04. Interests</h2>
                  <div className="flex flex-wrap gap-2">
                    {['Anime', 'Building Stuff', 'Learning', 'Sci-Fi'].map(i => (
                      <span key={i} className="text-[10px] font-mono px-3 py-1.5" style={{ border: '1px solid var(--border)', borderRadius: '999px', color: 'var(--fg-muted)' }}>
                        {i}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-[9px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--accent)' }}>05. Links</h2>
                  <div className="space-y-1 text-xs font-mono" style={{ color: 'var(--fg-dim)' }}>
                    <div>GitHub &mdash; Susanthakuri92</div>
                    <div>LinkedIn &mdash; susan-thakuri</div>
                    <div>Web &mdash; susan.vercel.app</div>
                  </div>
                </section>
              </div>
            </div>

            {/* --- FOOTER --- */}
            <div className="mt-4 pt-3" style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>

      </div>

      <style>{`
        @media print {
          @page { margin: 0; size: A4; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          div { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}
