import React from 'react';

export default function CachyOSPost() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter" style={{ color: 'var(--fg)' }}>Installing &amp; Using CachyOS</h1>
      <p className="font-mono text-sm mb-12" style={{ color: 'var(--fg-dim)' }}>Published on 2026-05-04</p>

      <div className="space-y-6">
        <p>
          CachyOS is a performance-optimized Arch-based distribution designed for speed and efficiency.
          Whether you're a gamer or a developer, CachyOS provides a highly tuned kernel and optimized
          packages that make the system feel snappier than standard Arch Linux.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: 'var(--fg)' }}>Installation on Root</h2>
        <p>
          For most users, installing CachyOS on a root partition is the best way to ensure stability and
          performance. Here is the simplified process:
        </p>

        <div className="p-6 my-8 font-mono text-sm" style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)' }}>
          <p className="mb-2" style={{ color: 'var(--accent)' }}>// Root Installation Workflow:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Boot:</strong> Flash the ISO to a USB and boot into the Live Environment.</li>
            <li><strong>Launcher:</strong> Start the CachyOS Installer from the desktop.</li>
            <li><strong>Partitioning:</strong> Choose "Erase Disk" for a fresh start or "Manual Partitioning" if you have a specific layout (e.g., separate /home).</li>
            <li><strong>Filesystem:</strong> CachyOS defaults to XFS or BTRFS—BTRFS is recommended for snapshot capabilities.</li>
            <li><strong>Finalize:</strong> Set up your locale, timezone, and user account.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: 'var(--fg)' }}>Post-Installation &amp; Usage</h2>
        <p>
          Once you're inside, CachyOS provides several tools to help you optimize your experience:
        </p>
        <ul className="list-disc list-inside space-y-3">
          <li><strong>CachyOS Hello:</strong> A welcome app that lets you easily install essential apps, kernels, and drivers.</li>
          <li><strong>Kernel Selection:</strong> You can switch between different optimized kernels (like the Bore kernel) to find the best fit for your hardware.</li>
          <li><strong>Package Management:</strong> Use <code className="px-1 rounded" style={{ backgroundColor: 'var(--code-bg)' }}>pacman</code> for standard Arch packages and the CachyOS repositories for optimized binaries.</li>
        </ul>

        <div className="p-6 my-8 font-mono text-sm" style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)' }}>
          <p className="mb-2" style={{ color: 'var(--accent)' }}>// Pro Tip:</p>
          <p>Regularly update your system using <code className="px-1 rounded" style={{ backgroundColor: 'var(--code-bg)' }}>sudo pacman -Syu</code> to keep the performance optimizations current.</p>
        </div>

        <p>
          For the full detailed technical guide, visit the
          <a href="https://wiki.cachyos.org/installation/installation_on_root/" className="hover:underline ml-1" style={{ color: 'var(--accent)' }}>
            Official CachyOS Wiki
          </a>.
        </p>
      </div>
    </article>
  );
}
