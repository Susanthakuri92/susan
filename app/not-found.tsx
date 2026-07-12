import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center" style={{ backgroundColor: 'var(--bg)', color: 'var(--fg)' }}>
      <span className="text-6xl md:text-8xl font-bold tracking-tighter mb-4" style={{ color: 'var(--accent)' }}>
        404
      </span>
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Page not found</h1>
      <p className="max-w-md mb-8" style={{ color: 'var(--fg-muted)' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="text-sm uppercase tracking-widest font-mono transition-smooth border-b border-transparent pb-1 hover:border-[var(--accent)]"
        style={{ color: 'var(--fg)' }}
      >
        ← Back home
      </a>
    </div>
  );
}