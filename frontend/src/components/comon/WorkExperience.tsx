export function WorkExperience({ experiences }: {
  experiences: Array<{
    title: string
    company: string
    period: string
    description: string
  }>
}) {
  // Palavras-chave a serem destacadas
  const keywords = [
    "R$10 million", "validated legacy payment", "smooth migration", "reduced costs", "improved reporting", "faster data visualization", 
    "automating report generation", "Python", "reduced weekly report generation", "improving process efficiency",
    "Testing", "defining clear solutions", "priority changes", "approving", "Product Backlog", "maximize business value", "continuous development"
  ];
  
  // Função para destacar palavras-chave
  const highlightKeywords = (text: string) => {
    let highlightedText = text;
    keywords.forEach((keyword) => {
      // Expressão regular que inclui caracteres especiais
      const regex = new RegExp(`(${keyword.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<strong>$1</strong>');
    });
    return highlightedText;
  };

  return (
    <div className="p-6 rounded-xl border-[var(--color-border)] border hover:-translate-y-1 transition-all">
      <ul className="space-y-4 text-[var(--color-muted-text)]">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-[var(--color-primary)] text-lg font-semibold">{exp.title}</h3>
            <p className="text-[var(--color-secondary)] font-semibold">{exp.company} ({exp.period})</p>
            <ul className="list-disc list-inside pl-5 text-[var(--color-subdued-text)] space-y-1 custom-bullet">
              {exp.description.split('\n').map((line, lineIndex) => (
                <li key={lineIndex}>
                  <span dangerouslySetInnerHTML={{ __html: highlightKeywords(line) }} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}
