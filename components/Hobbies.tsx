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
            <h3 className="text-lg font-bold text-terminal-green-bright mb-2">
              {hobby.title}
            </h3>

            <p className="text-terminal-green text-sm mb-2">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>

      {/* <div className="mt-6 p-3 bg-terminal-gray-dark border border-terminal-green/30 rounded">
        <p className="text-terminal-green-dim text-xs">
          <span className="text-terminal-green-bright">$</span> hobbies_list
        </p>
        <p className="text-terminal-green text-xs mt-1">
          Hobbies collection loaded successfully. Total hobbies:{" "}
          {hobbies.length}
        </p>
      </div> */}
    </div>
  );
}
