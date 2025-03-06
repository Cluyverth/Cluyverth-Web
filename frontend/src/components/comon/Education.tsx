export function Education({ education }: {
  education: Array<{
    degree: string
    institution: string
    period: string
    topics: Array<{ title: string; description?: string }>
  }>
}) {
  return (
    <div className="p-6 rounded-xl border-[var(--color-border)] border hover:-translate-y-1 transition-all">
      <div className="text-[var(--color-text-secondary)] space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-[var(--color-primary)] text-lg font-semibold">{edu.degree}</h3>
            <p className="text-[var(--color-secondary)] font-semibold">{edu.institution} ({edu.period})</p>
            <div className="ml-4 space-y-2 mt-1">
              {edu.topics.map((topic, idx) => (
                <p key={idx}>
                  {topic.title && <strong className="">• {topic.title}</strong>} {topic.description}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
