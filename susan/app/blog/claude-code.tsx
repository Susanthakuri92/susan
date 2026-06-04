import React from 'react';

export default function ClaudeCodePost() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 md:py-20 leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter" style={{ color: 'var(--fg)' }}>Using Claude Code for Free</h1>
      <p className="font-mono text-sm mb-12" style={{ color: 'var(--fg-dim)' }}>Published on 2026-05-04</p>

      <div className="space-y-6">
        <p>
          Claude Code is a powerful agentic tool that integrates directly into your workflow.
          By using a proxy, you can leverage various high-performance LLM providers to power the
          Claude Code experience without high costs.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: 'var(--fg)' }}>1. Environment Setup</h2>
        <p>
          Before installing the proxy, ensure you have the necessary runtime tools:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Install <strong>Python 3.14</strong></li>
          <li>Install <strong>uv</strong> (the fast Python package manager)</li>
        </ul>
        <div className="p-6 my-8 font-mono text-sm" style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)' }}>
          <p className="mb-2" style={{ color: 'var(--fg-dim)' }}>// Install uv on macOS/Linux:</p>
          <p style={{ color: 'var(--fg)' }}>curl -LsSf https://astral.sh/uv/install.sh | sh</p>
          <p className="mt-2 mb-2" style={{ color: 'var(--fg-dim)' }}>// Install Python:</p>
          <p style={{ color: 'var(--fg)' }}>uv python install 3.14</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: 'var(--fg)' }}>2. Configuring the Proxy</h2>
        <p>
          The proxy acts as a "drop-in" replacement for Claude Code's Anthropic API calls.
        </p>
        <ol className="list-decimal list-inside space-y-3">
          <li>Clone the <a href="https://github.com/Alishahryar1/free-claude-code" className="hover:underline" style={{ color: 'var(--accent)' }}>free-claude-code</a> repository.</li>
          <li>Copy <code className="px-1 rounded" style={{ backgroundColor: 'var(--code-bg)' }}>.env.example</code> to <code className="px-1 rounded" style={{ backgroundColor: 'var(--code-bg)' }}>.env</code>.</li>
          <li>Configure your provider in <code className="px-1 rounded" style={{ backgroundColor: 'var(--code-bg)' }}>.env</code>:
            <ul className="ml-6 mt-2 space-y-1 text-sm">
              <li><strong style={{ color: 'var(--fg)' }}>NVIDIA NIM:</strong> Set <code style={{ color: 'var(--accent)' }}>NVIDIA_NIM_API_KEY</code></li>
              <li><strong style={{ color: 'var(--fg)' }}>OpenRouter:</strong> Set <code style={{ color: 'var(--accent)' }}>OPENROUTER_API_KEY</code></li>
              <li><strong style={{ color: 'var(--fg)' }}>DeepSeek:</strong> Set <code style={{ color: 'var(--accent)' }}>DEEPSEEK_API_KEY</code></li>
              <li><strong style={{ color: 'var(--fg)' }}>Local:</strong> Works with Ollama or llama.cpp.</li>
            </ul>
          </li>
          <li>Start the proxy: <code className="px-1 rounded" style={{ backgroundColor: 'var(--code-bg)' }}>uv run uvicorn server:app --host 0.0.0.0 --port 8082</code></li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: 'var(--fg)' }}>3. Client Configuration</h2>
        <p>
          Tell the Claude CLI to talk to your local proxy instead of the official API:
        </p>
        <div className="p-6 my-8 font-mono text-sm overflow-x-auto" style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)' }}>
          <p className="mb-2" style={{ color: 'var(--accent)' }}>// CLI Launch Command:</p>
          <p style={{ color: 'var(--fg)' }}>
            ANTHROPIC_AUTH_TOKEN="freecc" ANTHROPIC_BASE_URL="http://localhost:8082" claude
          </p>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-2" style={{ color: 'var(--fg)' }}>IDE Integration</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-4" style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)' }}>
            <p className="font-bold mb-2" style={{ color: 'var(--fg)' }}>VS Code</p>
            <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>Add to <code style={{ color: 'var(--accent)' }}>settings.json</code>:</p>
            <pre className="text-xs mt-2 overflow-x-auto" style={{ color: 'var(--fg-dim)' }}>
{`{
  "claudeCode.environmentVariables": [
    { "name": "ANTHROPIC_BASE_URL", "value": "http://localhost:8082" },
    { "name": "ANTHROPIC_AUTH_TOKEN", "value": "freecc" }
  ]
}`}
            </pre>
          </div>
          <div className="p-4" style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)' }}>
            <p className="font-bold mb-2" style={{ color: 'var(--fg)' }}>JetBrains</p>
            <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>Edit <code style={{ color: 'var(--accent)' }}>installed.json</code> / <code style={{ color: 'var(--accent)' }}>acp.json</code>:</p>
            <pre className="text-xs mt-2 overflow-x-auto" style={{ color: 'var(--fg-dim)' }}>
{`"env": {
  "ANTHROPIC_BASE_URL": "http://localhost:8082",
  "ANTHROPIC_AUTH_TOKEN": "freecc"
}`}
            </pre>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: 'var(--fg)' }}>4. Pro Tips &amp; Troubleshooting</h2>
        <ul className="list-disc list-inside space-y-3">
          <li><strong style={{ color: 'var(--fg)' }}>Model Switching:</strong> Use <code className="px-1 rounded" style={{ backgroundColor: 'var(--code-bg)' }}>/model</code> inside the CLI to choose any discovered provider model.</li>
          <li><strong style={{ color: 'var(--fg)' }}>Thinking Models:</strong> If a model fails during "thinking" phases, try the "(no thinking)" variant in the picker.</li>
          <li><strong style={{ color: 'var(--fg)' }}>Connection Errors:</strong> Ensure your proxy is running and that you've pointed the Base URL to the root <code className="px-1 rounded" style={{ backgroundColor: 'var(--code-bg)' }}>http://localhost:8082</code> (do not append /v1).</li>
        </ul>
      </div>
    </article>
  );
}
