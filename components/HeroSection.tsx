export default function HeroSection() {
  return (
    <div className="border border-terminal-green/30 rounded p-4 bg-terminal-gray-dark/30">
      <h1 className="text-2xl font-bold text-terminal-green-bright mb-4">
        Roberto Togni
      </h1>
      <h2 className="text-lg font-mono text-terminal-green mb-4">
        {/* Full Stack Developer & Designer */}
      </h2>

      <div className="space-y-3">
        <p className="text-terminal-green text-sm">
          Software engineer specializing in Next.js applications and agentic
          development. Absolutely in love with retro interfaces and
          terminal-style experiences.
        </p>
      </div>
    </div>
  );
}
