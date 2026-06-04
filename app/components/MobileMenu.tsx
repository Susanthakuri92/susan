'use client';

interface MobileMenuProps {
  isOpen: boolean;
  sections: string[];
  onSectionClick: (section: string) => void;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, sections, onSectionClick, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="md:hidden fixed inset-0 z-[90] bg-black/30 transition-smooth"
        onClick={onClose}
      />
      <div
        className="md:hidden fixed top-[5rem] left-1/2 -translate-x-1/2 w-[92%] backdrop-blur-xl rounded-[1.25rem] z-[100] flex flex-col p-6 transition-smooth"
        style={{
          backgroundColor: 'var(--header-bg)',
          border: '1px solid var(--border)',
          boxShadow: '0 20px 50px var(--header-shadow)',
        }}
      >
        <nav className="flex flex-col gap-6 text-center">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => onSectionClick(section)}
              className="text-lg font-bold uppercase tracking-widest transition-smooth pb-4 last:border-0 last:pb-0"
              style={{
                color: 'var(--fg-muted)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {section === 'about' ? 'About Me' : section === 'blog' ? 'Blog/Guides' : section}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
