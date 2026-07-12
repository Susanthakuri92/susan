'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  sections: string[];
  activeSection: string;
  isScrolled: boolean;
  isMenuOpen: boolean;
  onSectionClick: (section: string) => void;
  onMenuClick: () => void;
}

export default function Header({ sections, activeSection, isScrolled, isMenuOpen, onSectionClick, onMenuClick }: HeaderProps) {
  const [isHovering, setIsHovering] = useState(false);

  const active = isScrolled || isHovering;

  return (
    <header
      style={{
        position: 'fixed',
        top: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        background: active ? 'var(--header-bg)' : 'transparent',
        backdropFilter: active ? 'blur(20px)' : 'none',
        borderRadius: active ? '1.25rem' : '0',
        padding: active ? '0.75rem 2rem' : '1rem 1.5rem',
        boxShadow: active ? '0 0 30px rgba(255, 255, 255, 0.06), 0 10px 40px var(--header-shadow)' : 'none',
        border: 'none',
        zIndex: 100,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      className="flex justify-between items-center w-[92%] max-w-6xl transition-smooth"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <h1
        className="text-xl md:text-2xl font-bold tracking-tighter hover:text-[var(--accent)] transition-colors cursor-pointer"
        style={{ color: 'var(--fg)' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Susan.Thakuri
      </h1>

      <nav className="hidden md:flex gap-10 items-center">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => onSectionClick(section)}
            className="text-[10px] uppercase tracking-[0.2em] transition-all relative py-2 group font-mono"
            style={{ color: activeSection === section ? 'var(--accent)' : 'var(--fg-muted)' }}
            aria-current={activeSection === section ? 'true' : undefined}
          >
            {section === 'about' ? 'About Me' : section === 'blog' ? 'Blog/Guides' : section}
            <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
              activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
            }`} style={{ backgroundColor: 'var(--accent)' }} />
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>

      <div className="md:hidden flex items-center gap-3">
        <button
          className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 group z-[110]"
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ backgroundColor: 'var(--fg-muted)' }} />
          <span className={`block w-6 h-px transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--fg-muted)' }} />
          <span className={`block w-6 h-px transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} style={{ backgroundColor: 'var(--fg-muted)' }} />
        </button>
      </div>
    </header>
  );
}
