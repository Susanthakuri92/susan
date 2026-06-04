import React from 'react';

export default function TauCLIPost() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 md:py-20 leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter" style={{ color: 'var(--fg)' }}>Mastering Tau CLI</h1>
      <p className="font-mono text-sm mb-12" style={{ color: 'var(--fg-dim)' }}>Published on 2026-05-04</p>

      <div className="space-y-6">
        <p>
          Tau is an open-source, multi-provider AI coding CLI. Unlike standard interfaces, it uses
          <strong style={{ color: 'var(--fg)' }}> native adapters</strong> for each provider, allowing it to communicate
          directly with LLM APIs for better streaming and rate-limit handling.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: 'var(--fg)' }}>Installation</h2>
        <p>Ensure you have Node.js (v20+), Bash, and the GitHub CLI (<code className="px-1 rounded" style={{ backgroundColor: 'var(--code-bg)' }}>gh</code>) installed.</p>
        <div className="p-6 my-8 font-mono text-sm" style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)' }}>
          <p className="mb-2" style={{ color: 'var(--accent)' }}>// Global Install:</p>
          <p style={{ color: 'var(--fg)' }}>npm install -g @abdoknbgit/tau</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: 'var(--fg)' }}>The Command Palette</h2>
        <p>Tau operates through a powerful set of slash commands:</p>

        <div className="space-y-4 my-8">
          <div className="p-4" style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)' }}>
            <h3 className="font-bold mb-2" style={{ color: 'var(--fg)' }}>Setup &amp; Models</h3>
            <ul className="text-sm space-y-2">
              <li><code style={{ color: 'var(--accent)' }}>/login</code> — Setup your API credentials.</li>
              <li><code style={{ color: 'var(--accent)' }}>/provider</code> — Check status of available providers.</li>
              <li><code style={{ color: 'var(--accent)' }}>/models</code> — Search and select an LLM (supports queries like <code style={{ color: 'var(--fg-muted)' }}>/models openrouter:kimi</code>).</li>
            </ul>
          </div>
          <div className="p-4" style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)' }}>
            <h3 className="font-bold mb-2" style={{ color: 'var(--fg)' }}>Session Graph Management</h3>
            <p className="text-xs mb-2" style={{ color: 'var(--fg-dim)' }}>Tau treats history as a graph, not a list.</p>
            <ul className="text-sm space-y-2">
              <li><code style={{ color: 'var(--accent)' }}>/tree</code> — Navigate the session graph to move between conversation nodes.</li>
              <li><code style={{ color: 'var(--accent)' }}>/branch</code> — Fork the current point to explore a new direction.</li>
              <li><code style={{ color: 'var(--accent)' }}>/clone</code> — Create a clean duplicate of the session.</li>
            </ul>
          </div>
          <div className="p-4" style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)' }}>
            <h3 className="font-bold mb-2" style={{ color: 'var(--fg)' }}>Analytics &amp; Reports</h3>
            <ul className="text-sm space-y-2">
              <li><code style={{ color: 'var(--accent)' }}>/usage</code> — Real-time stream of provider consumption.</li>
              <li><code style={{ color: 'var(--accent)' }}>/report</code> — Generates a high-quality session summary (MD, PDF, or HTML).</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: 'var(--fg)' }}>Advanced Integrations</h2>
        <ul className="list-disc list-inside space-y-3">
          <li><strong style={{ color: 'var(--fg)' }}>GitHub Automation:</strong> Use <code className="px-1 rounded" style={{ backgroundColor: 'var(--code-bg)' }}>/github</code> to manage PRs, triage issues, and build changelogs from commit history.</li>
          <li><strong style={{ color: 'var(--fg)' }}>Voice Mode:</strong> Activate <code className="px-1 rounded" style={{ backgroundColor: 'var(--code-bg)' }}>/hey</code> and hold Space to interact with your code via voice.</li>
          <li><strong style={{ color: 'var(--fg)' }}>Automatic Fallbacks:</strong> Configure <code className="px-1 rounded" style={{ backgroundColor: 'var(--code-bg)' }}>/fallback</code> to automatically switch providers during outages.</li>
        </ul>
      </div>
    </article>
  );
}
