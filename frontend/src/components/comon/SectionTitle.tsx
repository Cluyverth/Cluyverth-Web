interface SectionTitleProps {
  title: string;
  hidden_md_lg?: boolean;
}

export function SectionTitle({ title, hidden_md_lg = false }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl font-bold mb-8 text-[var(--color-primary)] text-center ${hidden_md_lg ? 'block sm:hidden' : ''}`}>
      {title}
    </h2>
  );
}
