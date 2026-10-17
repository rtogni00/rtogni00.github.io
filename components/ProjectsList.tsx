import { projects } from "@/data/projects";

export default function ProjectsList() {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-terminal-green-bright mb-4">
        Projects
      </h2>

      <div className="space-y-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-terminal-green/30 rounded p-3 bg-terminal-gray-dark/30"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-1">
              <h3 className="text-base font-bold text-terminal-green-bright">
                {project.title}
              </h3>
              <span className="text-terminal-green-dim text-xs">
                {project.year} · {project.status}
              </span>
            </div>

            <p className="text-terminal-green text-sm mb-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 items-center">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs px-2 py-1 bg-terminal-green/20 text-terminal-green-bright border border-terminal-green/30 rounded"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs px-2 py-1 text-terminal-green-dim">
                  +{project.technologies.length - 3} more
                </span>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-xs text-terminal-green-bright underline hover:text-terminal-green"
                >
                  View →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
