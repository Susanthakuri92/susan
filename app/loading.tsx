export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg)', color: 'var(--fg)' }}>
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-6 h-6 rounded-full animate-spin"
          style={{
            border: '2px solid var(--border)',
            borderTopColor: 'var(--accent)',
          }}
        />
        <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--fg-dim)' }}>
          Loading...
        </span>
      </div>
    </div>
  );
}