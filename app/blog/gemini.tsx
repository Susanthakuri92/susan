import React from 'react';

export default function GeminiCLIPost() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 md:py-20 leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter" style={{ color: 'var(--fg)' }}>Gemini CLI: Technical Guide</h1>
      <p className="font-mono text-sm mb-12" style={{ color: 'var(--fg-dim)' }}>Published on 2026-05-04</p>

      <div className="space-y-6">
        <p>
          The Gemini CLI leverages Google's massive context windows, making it a powerhouse for
          analyzing entire codebases or massive log files directly from the terminal.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: 'var(--fg)' }}>Installation</h2>
        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="p-4 font-mono text-xs" style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)' }}>
            <p className="mb-2" style={{ color: 'var(--fg-dim)' }}>NPM</p>
            <p style={{ color: 'var(--fg)' }}>npm install -g @google/gemini-cli</p>
          </div>
          <div className="p-4 font-mono text-xs" style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)' }}>
            <p className="mb-2" style={{ color: 'var(--fg-dim)' }}>Homebrew</p>
            <p style={{ color: 'var(--fg)' }}>brew install gemini-cli</p>
          </div>
          <div className="p-4 font-mono text-xs" style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)' }}>
            <p className="mb-2" style={{ color: 'var(--fg-dim)' }}>Quick Run</p>
            <p style={{ color: 'var(--fg)' }}>npx @google/gemini-cli</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: 'var(--fg)' }}>Usage &amp; Execution</h2>
        <p>Basic execution is handled via the <code className="px-1 rounded" style={{ backgroundColor: 'var(--code-bg)' }}>gemini</code> command.</p>
        <div className="p-6 my-8 font-mono text-sm" style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)' }}>
          <p className="mb-2" style={{ color: 'var(--accent)' }}>// Common Flags:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><code style={{ color: 'var(--fg)' }}>-p "prompt"</code> — Specify the prompt directly.</li>
            <li><code style={{ color: 'var(--fg)' }}>-y</code> — Auto-confirm prompts.</li>
            <li><code style={{ color: 'var(--fg)' }}>--sandbox</code> — Run in an isolated container for security.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: 'var(--fg)' }}>Release Channels</h2>
        <p>Depending on your needs, you can choose from three different update tracks:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse" style={{ border: '1px solid var(--code-border)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--code-bg)', color: 'var(--fg)' }}>
                <th className="p-3" style={{ border: '1px solid var(--code-border)' }}>Channel</th>
                <th className="p-3" style={{ border: '1px solid var(--code-border)' }}>Frequency</th>
                <th className="p-3" style={{ border: '1px solid var(--code-border)' }}>Stability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 font-bold" style={{ border: '1px solid var(--code-border)' }}>Stable</td>
                <td className="p-3" style={{ border: '1px solid var(--code-border)' }}>Weekly</td>
                <td className="p-3 text-green-500" style={{ border: '1px solid var(--code-border)' }}>High</td>
              </tr>
              <tr>
                <td className="p-3 font-bold" style={{ border: '1px solid var(--code-border)' }}>Preview</td>
                <td className="p-3" style={{ border: '1px solid var(--code-border)' }}>Weekly</td>
                <td className="p-3 text-yellow-500" style={{ border: '1px solid var(--code-border)' }}>Moderate</td>
              </tr>
              <tr>
                <td className="p-3 font-bold" style={{ border: '1px solid var(--code-border)' }}>Nightly</td>
                <td className="p-3" style={{ border: '1px solid var(--code-border)' }}>Daily</td>
                <td className="p-3 text-red-500" style={{ border: '1px solid var(--code-border)' }}>Experimental</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: 'var(--fg)' }}>Security &amp; Sandboxing</h2>
        <p>
          The Gemini CLI can execute tools that might have side effects. To mitigate this, the
          <strong style={{ color: 'var(--fg)' }}> --sandbox</strong> flag isolates the execution.
        </p>
        <div className="p-6 my-8 font-mono text-sm" style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)' }}>
          <p className="mb-2" style={{ color: 'var(--fg-dim)' }}>// Docker Sandbox Image:</p>
          <p style={{ color: 'var(--fg)' }}>us-docker.pkg.dev/gemini-code-dev/gemini-cli/sandbox:0.1.1</p>
        </div>
      </div>
    </article>
  );
}
