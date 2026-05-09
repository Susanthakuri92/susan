'use client';

export default function ScrollToTop({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-[90] w-12 h-12 rounded-none flex items-center justify-center transition-all group"
      style={{
        backgroundColor: 'var(--bg)',
        border: '1px solid var(--border)',
        color: 'var(--fg-dim)',
      }}
    >
      <span className="text-lg font-light group-hover:-translate-y-1 transition-transform">↑</span>
    </button>
  );
}
