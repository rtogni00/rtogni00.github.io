import { career } from "@/data/career";

export default function Career() {
  return (
    <div className="space-y-6">
      {career.map((job, index) => (
        <div
          key={index}
          className="border border-terminal-green/30 rounded p-3 bg-terminal-gray-dark/30"
        >
          <h3 className="text-base font-bold text-terminal-green-bright mb-2">
            {job.title}
          </h3>

          <div className="space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-terminal-green-bright">Company:</span>
              <span className="text-terminal-green">{job.company}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-terminal-green-bright">Duration:</span>
              <span className="text-terminal-green">{job.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-terminal-green-bright">Role:</span>
              <span className="text-terminal-green">{job.role}</span>
            </div>
          </div>

          <div className="mt-3">
            <p className="text-terminal-green-dim text-xs mb-2">Skills:</p>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-terminal-green/20 text-terminal-green-bright border border-terminal-green/30 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
