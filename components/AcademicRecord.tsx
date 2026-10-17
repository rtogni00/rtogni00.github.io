import { academicRecord } from "@/data/cv";

export default function AcademicRecord() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-terminal-green-bright mb-4">
        Academic Record
      </h2>

      <div className="space-y-4">
        {academicRecord.map((edu, index) => (
          <div
            key={index}
            className="border border-terminal-green/30 rounded p-3 bg-terminal-gray-dark/30"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-1">
              <h3 className="text-base font-bold text-terminal-green-bright">
                {edu.institution}
              </h3>
              <span className="text-terminal-green-dim text-xs">
                {edu.year}
              </span>
            </div>

            <p className="text-terminal-green text-sm">
              <span className="text-terminal-green-dim">Degree:</span> {" "}
              {edu.degree}
            </p>
            <p className="text-terminal-green text-sm">
              <span className="text-terminal-green-dim">Field:</span> {" "}
              {edu.field}
            </p>
            <p className="text-terminal-green text-sm">
              <span className="text-terminal-green-dim">Final grade:</span> {" "}
              {edu.finalGrade}
            </p>

            {edu.achievements && edu.achievements.length > 0 && (
              <div className="mt-2">
                <p className="text-terminal-green-dim text-xs mb-1">
                  Achievements:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-terminal-green text-sm">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
