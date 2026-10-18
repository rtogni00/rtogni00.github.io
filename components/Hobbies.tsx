import { hobbies } from "@/data/hobbies";

export default function Hobbies() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-terminal-green-bright mb-4">
        Hobbies
      </h2>

      <div className="space-y-3">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="border border-terminal-green/30 rounded p-3 bg-terminal-gray-dark/30"
          >
            <h3 className="text-base font-bold text-terminal-green-bright mb-1">
              {hobby.title}
            </h3>

            <p className="text-terminal-green text-sm">{hobby.description}</p>

            {hobby.link && (
              <a
                href={hobby.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-terminal-green-bright underline hover:text-terminal-green mt-2 inline-block"
              >
                {hobby.linkLabel ?? hobby.link}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
