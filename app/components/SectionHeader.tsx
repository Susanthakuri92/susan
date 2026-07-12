interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="w-12 h-px" style={{ backgroundColor: 'var(--border)' }} />
      <h2 className="text-sm font-mono uppercase tracking-widest m-0" style={{ color: 'var(--fg-dim)' }}>
        {title}
      </h2>
      <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
    </div>
  );
}