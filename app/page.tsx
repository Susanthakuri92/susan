'use client';

import { SECTIONS, PROJECTS, EXPERIENCE, SKILLS, SERVICES, POSTS } from './constants';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import InteractiveGrid from './components/InteractiveGrid';
import SectionHeader from './components/SectionHeader';
import ScrollToTop from './components/ScrollToTop';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const section of SECTIONS) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;
          if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen relative" style={{ color: 'var(--fg)' }}>
      {/* Background Elements */}
      <InteractiveGrid />
      <div className="axis-x" />
      <div className="axis-y" />


      <Header
        sections={SECTIONS}
        activeSection={activeSection}
        isScrolled={isScrolled}
        isMenuOpen={isMobileMenuOpen}
        onSectionClick={scrollToSection}
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        sections={SECTIONS}
        onSectionClick={scrollToSection}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main id="main-content" className="max-w-5xl mx-auto px-6 md:px-12 pt-28 md:pt-48 pb-24 md:pb-32">
        {/* HERO */}
        <section id="about" className="min-h-[60vh] flex flex-col justify-center mb-32 relative z-10">
          <div className="border-grid-l pl-8 md:pl-12 py-4 relative">
            <div className="crosshair crosshair-tl" />
            <div className="crosshair crosshair-bl" />
            <div className="geo-dot top-0 -left-[2px]" />
            <div className="geo-dot bottom-0 -left-[2px]" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Susan Thakuri.
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl leading-relaxed mb-8" style={{ color: 'var(--fg-muted)' }}>
              I'm a beginner learning web development. I spend my time building projects, breaking layouts, and figuring out how things work one line at a time.
            </p>
            <div className="flex gap-6 items-center">
              <button onClick={() => scrollToSection('work')} className="text-sm uppercase tracking-widest font-mono transition-smooth border-b border-transparent pb-1 hover:border-[var(--accent)]" style={{ color: 'var(--fg)' }}>
                See my work
              </button>
              <span style={{ color: 'var(--fg-faint)' }}>/</span>
              <button onClick={() => scrollToSection('contact')} className="text-sm uppercase tracking-widest font-mono transition-smooth border-b border-transparent pb-1 hover:border-[var(--accent)]" style={{ color: 'var(--fg)' }}>
                Get in touch
              </button>
            </div>
          </div>
        </section>


        {/* BLOG */}
        <section id="blog" className="mb-20 md:mb-32 relative z-10 backdrop-blur-[2px]" style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 40%, transparent)' }}>
          <SectionHeader title="Log / Guides" />
          <div className="space-y-0 border-grid relative">
            <div className="crosshair crosshair-tl" />
            <div className="crosshair crosshair-tr" />
            <div className="crosshair crosshair-bl" />
            <div className="crosshair crosshair-br" />
            {POSTS.map((post, i) => (
              <a key={i} href={post.link} className={`relative p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 transition-colors ${i !== POSTS.length - 1 ? 'border-grid-b' : ''}`} style={{ ['--tw-bg-opacity' as string]: 1 }}>
                {i !== POSTS.length - 1 && <div className="crosshair crosshair-bl" />}
                {i !== POSTS.length - 1 && <div className="crosshair crosshair-hair-br" />}
                <div className="max-w-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold">{post.title}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 inline-block w-fit uppercase" style={{ color: 'var(--accent)', border: '1px solid var(--wire-accent)' }}>{post.date}</span>
                  </div>
                  <p style={{ color: 'var(--fg-muted)' }} className="text-base leading-relaxed">{post.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SERVICES / WHAT I DO */}
        <section className="mb-20 md:mb-32 relative z-10 backdrop-blur-[2px]" style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 40%, transparent)' }}>
          <SectionHeader title="What I Do" />
          <div className="grid md:grid-cols-3 gap-0 border-grid relative">
            <div className="crosshair crosshair-tl" />
            <div className="crosshair crosshair-tr" />
            <div className="crosshair crosshair-bl" />
            <div className="crosshair crosshair-br" />
            {SERVICES.map((s, i) => (
              <div key={i} className={`relative p-8 ${i !== 2 ? 'border-grid-b md:border-grid-b-0 md:border-grid-r' : ''} transition-colors card-hover`}>
                {i !== 2 && <div className="hidden md:block crosshair crosshair-tr" />}
                <span className="text-2xl block mb-6" style={{ color: 'var(--accent)' }}>{s.icon}</span>
                <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WORK / PROJECTS */}
        <section id="work" className="mb-20 md:mb-32 relative z-10 backdrop-blur-[2px]" style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 40%, transparent)' }}>
          <SectionHeader title="Selected Work" />
          <div className="space-y-0 border-grid relative">
            <div className="crosshair crosshair-tl" />
            <div className="crosshair crosshair-tr" />
            <div className="crosshair crosshair-bl" />
            <div className="crosshair crosshair-br" />
            {PROJECTS.map((p, i) => (
              <a key={i} href={p.link} className={`relative p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 transition-colors card-hover ${i !== PROJECTS.length - 1 ? 'border-grid-b' : ''}`}>
                {i !== PROJECTS.length - 1 && <div className="crosshair crosshair-bl" />}
                {i !== PROJECTS.length - 1 && <div className="crosshair crosshair-br" />}
                <div className="max-w-xl">
                  <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                  <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--fg-muted)' }}>{p.description}</p>
                  <div className="flex gap-4">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs font-mono uppercase" style={{ color: 'var(--fg-dim)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-10 md:py-14 text-center relative z-10 bg-transparent rounded-[1.25rem] flex flex-col items-center max-w-2xl mx-auto w-[92%] mb-12 border-0 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500">

          <div className="crosshair crosshair-tl hidden md:block" />
          <div className="crosshair crosshair-tr hidden md:block" />
          <div className="crosshair crosshair-bl hidden md:block" />
          <div className="crosshair crosshair-br hidden md:block" />

          <div className="mb-12 px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's work together.</h2>
            <p className="mb-12 max-w-lg mx-auto" style={{ color: 'var(--fg-muted)' }}>
              I'm currently available for freelance work. If you have a project that needs building, I'd love to hear about it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:susanthakuri92@gmail.com" className="inline-block font-bold px-8 py-4 transition-all duration-300 text-center" style={{ border: '1px solid var(--btn-border)', color: 'var(--btn-text)' }}>
                Get In Touch
              </a>
              <Link href="/cv" className="inline-block font-bold px-8 py-4 transition-all duration-300 text-center" style={{ border: '1px solid var(--btn-border)', color: 'var(--btn-text)' }}>
                View CV
              </Link>
            </div>
          </div>

          <div className="w-full max-w-md h-px mb-10" style={{ backgroundColor: 'var(--border)' }} />

          <footer className="w-full text-center text-xs font-mono uppercase" style={{ color: 'var(--fg-faint)' }}>
            <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 mb-6">
              <a href="https://github.com/Susanthakuri92" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.2em] transition-all relative py-2 group/link font-mono" style={{ color: 'var(--fg-muted)' }}>
                GitHub
                <span className="absolute bottom-0 left-0 h-[2px] transition-all duration-300 w-0 group-hover/link:w-full" style={{ backgroundColor: 'var(--accent)' }} />
              </a>
              <a href="https://www.linkedin.com/in/susan-thakuri-9119a31bb/" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.2em] transition-all relative py-2 group/link font-mono" style={{ color: 'var(--fg-muted)' }}>
                LinkedIn
                <span className="absolute bottom-0 left-0 h-[2px] transition-all duration-300 w-0 group-hover/link:w-full" style={{ backgroundColor: 'var(--accent)' }} />
              </a>
              <a href="https://www.instagram.com/_soosannnn/?hl=en" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.2em] transition-all relative py-2 group/link font-mono" style={{ color: 'var(--fg-muted)' }}>
                Instagram
                <span className="absolute bottom-0 left-0 h-[2px] transition-all duration-300 w-0 group-hover/link:w-full" style={{ backgroundColor: 'var(--accent)' }} />
              </a>
              <a href="https://www.facebook.com/soosaann/" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.2em] transition-all relative py-2 group/link font-mono" style={{ color: 'var(--fg-muted)' }}>
                Facebook
                <span className="absolute bottom-0 left-0 h-[2px] transition-all duration-300 w-0 group-hover/link:w-full" style={{ backgroundColor: 'var(--accent)' }} />
              </a>
            </div>
            <p className="text-[10px] tracking-widest">© {new Date().getFullYear()} Susan Thakuri</p>
          </footer>
        </section>
      </main>

      <ScrollToTop onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}
