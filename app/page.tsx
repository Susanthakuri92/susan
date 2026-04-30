'use client';

import { useState, useEffect, useMemo } from 'react';

export default function Home() {
  const [solarSystemActive, setSolarSystemActive] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "A beginner developer exploring the cosmos of code, one line at a time.";

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

  // Typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      title: "My First Portfolio",
      description: "This portfolio website you're looking at right now. Built with Next.js and Tailwind CSS.",
      tags: ["Next.js", "React", "Tailwind"],
      link: "#",
      icon: "🚀",
    },
    {
      title: "Coming Soon",
      description: "Working on my next project. Check back soon!",
      tags: ["In Progress"],
      link: "#",
      icon: "🔨",
    },
    {
      title: "Coming Soon",
      description: "More projects will be added as I learn and build.",
      tags: ["Planned"],
      link: "#",
      icon: "💡",
    },
  ];

  const stats = [
    { label: "Days Learning", value: "30+" },
    { label: "Projects Built", value: "1" },
    { label: "Lines of Code", value: "∞" },
    { label: "Cups of Coffee", value: "∞" },
  ];

  const experience = [
    {
      title: "Learning Web Development",
      company: "Self-Taught",
      period: "2024 - Present",
      description: "Starting my journey in web development with the help of AI. Building projects and learning every day.",
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

      {/* Shooting stars */}
      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />
      <div className="shooting-star shooting-star-3" />

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

      <div className="min-h-screen p-8 md:p-16 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-16 animate-fade-in">
          <h1 className="text-3xl font-bold text-white tracking-tight">Susan Thakuri</h1>
          <button
            onClick={() => setSolarSystemActive(!solarSystemActive)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
          >
            <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${solarSystemActive ? 'bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.5)]' : 'bg-white/30'}`} />
            <span className="text-white/70 text-sm font-medium group-hover:text-white/90 transition-colors">
              {solarSystemActive ? 'Halt the Cosmos' : 'Awaken the Cosmos'}
            </span>
          </button>
        </header>

        {/* Hero Section */}
        <section className="mb-24 animate-slide-up">
          <div className="liquid-glass rounded-3xl p-8 md:p-16 max-w-5xl mx-auto relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
            {/* Floating elements */}
            <div className="absolute top-10 right-10 text-6xl animate-float opacity-20">✨</div>
            <div className="absolute bottom-10 left-10 text-4xl animate-float opacity-20" style={{ animationDelay: '1s' }}>🌟</div>
            <div className="absolute top-1/2 right-20 text-3xl animate-float opacity-20" style={{ animationDelay: '2s' }}>💫</div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="text-indigo-400 text-sm font-medium">Welcome to my universe</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Hi, I'm <span className="gradient-text glow">Susan Thakuri</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-8 min-h-[3rem]">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
              <p className="text-white/60 leading-relaxed mb-8 max-w-2xl">
                I'm just starting my journey in web development. Learning every day with the help of AI,
                building projects, and growing step by step. This portfolio is a work in progress,
                just like me.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10 group"
                  >
                    <div className="text-3xl font-bold text-white mb-1 group-hover:gradient-text transition-all">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 group"
                >
                  <span>See My Work</span>
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 group"
                >
                  <span>Say Hello</span>
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-24">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Projects
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Small steps, big dreams. Here's what I've built so far.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="liquid-glass rounded-2xl p-6 transition-all duration-500 animate-slide-up group hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
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
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium group-hover:gap-2"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mb-24">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              My Journey
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Every expert was once a beginner. Here's where I started.
            </p>
          </div>
          <div className="liquid-glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
            <div className="relative z-10 space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="timeline-item animate-slide-up group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-white/80 mb-2">{exp.company}</p>
                      <p className="text-indigo-400 text-sm mb-3">{exp.period}</p>
                      <p className="text-white/70 text-sm">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-2xl mx-auto animate-slide-up">
          <div className="liquid-glass rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 text-4xl opacity-20">💌</div>
            <div className="absolute bottom-4 left-4 text-3xl opacity-20">✉️</div>

            <div className="relative z-10">
              <div className="inline-block mb-4 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                <span className="text-indigo-400 text-sm font-medium">Let's Connect</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Say Hello
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                I'm just starting out, but I'm eager to learn and grow. If you have any advice,
                opportunities, or just want to say hi, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 group"
                >
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Send Email</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 group"
                >
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-8">
                {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social}
                  >
                    <span className="text-white/70 hover:text-white text-sm font-medium">
                      {social[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-24 text-center">
          <div className="liquid-glass rounded-2xl p-8 max-w-2xl mx-auto hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-2xl animate-float">🌟</span>
              <span className="text-2xl animate-float" style={{ animationDelay: '0.5s' }}>✨</span>
              <span className="text-2xl animate-float" style={{ animationDelay: '1s' }}>🚀</span>
            </div>
            <p className="text-white/60 text-sm mb-2">
              © 2024 Susan Thakuri. Learning, building, growing.
            </p>
            <p className="text-white/40 text-xs">
              Made with <span className="text-red-400">❤️</span> and lots of <span className="text-amber-400">☕</span>
            </p>
          </div>
        </footer>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-110 z-50 animate-fade-in"
            aria-label="Scroll to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
