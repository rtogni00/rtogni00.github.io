export default function HeroSection() {
  return (
    <div className="border border-terminal-green/30 rounded p-4 bg-terminal-gray-dark/30">
      <h1 className="text-2xl font-bold text-terminal-green-bright mb-4">
        Roberto Togni
      </h1>

      <h2 className="text-base font-mono text-terminal-green mb-4">
        Software engineer · agentic tooling · TUIs
      </h2>

      <div className="space-y-3 text-terminal-green text-sm">
        <p>
          I build Next.js (but not only) applications and the agents that help
          write them. I love retro interfaces with blinking cursors, monospace,
          the smell of a CLI.
        </p>
      </div>
    </div>
  );
}
