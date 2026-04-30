'use client';

import { useState, useEffect, useMemo } from 'react';

export default function Home() {
  const [solarSystemActive, setSolarSystemActive] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Generate stars once - won't change on re-render
  const stars = useMemo(() => {
    return [...Array(100)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
    }));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      title: "This Portfolio",
      description: "Yeah, I made this. It's my first real project. Still figuring things out.",
      tags: ["Next.js", "React", "Tailwind"],
      link: "#",
    },
    {
      title: "Something Else",
      description: "Working on it. Will update when I actually build something.",
      tags: ["In Progress"],
      link: "#",
    },
    {
      title: "Future Stuff",
      description: "Ideas floating in my head. Need to learn more first.",
      tags: ["Planned"],
      link: "#",
    },
  ];

  const experience = [
    {
      title: "Started Learning Code",
      company: "Self-Taught",
      period: "2024 - Now",
      description: "Decided to learn web development. Using AI to help me along the way. It's been a journey.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Stars background */}
      <div className="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.animationDelay}s`,
              width: `${star.width}px`,
              height: `${star.height}px`,
            }}
          />
        ))}
      </div>

      {/* Solar System */}
      <div className={`solar-system ${!solarSystemActive ? 'paused' : ''}`}>
        <div className="sun" />
        <div className="orbit orbit-1">
          <div className="planet planet-1" />
        </div>
        <div className="orbit orbit-2">
          <div className="planet planet-2" />
        </div>
        <div className="orbit orbit-3">
          <div className="planet planet-3" />
        </div>
        <div className="orbit orbit-4">
          <div className="planet planet-4" />
        </div>
        <div className="orbit orbit-5">
          <div className="planet planet-5" />
        </div>
        <div className="orbit orbit-6">
          <div className="planet planet-6" />
        </div>
        <div className="orbit orbit-7">
          <div className="planet planet-7" />
        </div>
        <div className="orbit orbit-8">
          <div className="planet planet-8" />
        </div>
      </div>

      <div className="min-h-screen p-8 md:p-16 relative z-10 flex flex-col items-center">
        {/* Header */}
        <header className="flex justify-between items-center w-full max-w-6xl mb-16">
          <h1 className="text-3xl font-bold text-white">Susan System</h1>
          <button
            onClick={() => setSolarSystemActive(!solarSystemActive)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
          >
            <div className={`w-3 h-3 rounded-full ${solarSystemActive ? 'bg-indigo-400' : 'bg-white/30'}`} />
            <span className="text-white/70 text-sm">
              {solarSystemActive ? 'Halt the Cosmos' : 'Awaken the Cosmos'}
            </span>
          </button>
        </header>

        {/* Hero Section */}
        <section className="mb-24 w-full max-w-4xl">
          <div className="liquid-glass rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hey, I'm <span className="text-indigo-400">Susan</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              I'm learning to code. Started recently, still figuring things out. This website is my first project - it's not perfect, but it's mine.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Using AI to help me learn. Breaking things, fixing them, learning along the way. If you're seeing this, thanks for stopping by.
            </p>
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition-colors"
            >
              See what I've made
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 w-full max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="liquid-glass rounded-xl p-6 hover:bg-white/5 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-md text-xs text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Journey Section */}
        <section id="experience" className="mb-24 w-full max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            So far...
          </h2>
          <div className="liquid-glass rounded-2xl p-8 md:p-12">
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-white/80 mb-2">{exp.company}</p>
                  <p className="text-indigo-400 text-sm mb-3">{exp.period}</p>
                  <p className="text-white/70 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full max-w-2xl mb-24">
          <div className="liquid-glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get in touch
            </h2>
            <p className="text-white/60 mb-8">
              I'm new to this, but I'm open to learning. If you have advice, opportunities, or just want to say hi - email me.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition-colors"
            >
              susanthakuri92@gmail.com
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center">
          <p className="text-white/40 text-sm">
            © 2024 Susan Thakuri. Still learning.
          </p>
        </footer>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center text-white transition-all z-50"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </div>
    </div>
  );
}
