export function Pill({ tech }: { tech: string }) {
  return (
    <span className="bg-[var(--color-primary)] text-[var(--color-primary-content)] py-1 px-3 rounded-full text-sm hover:bg-[var(--color-secondary)] hover:text-[var(--color-secondary-content)] transition">
      {tech}
    </span>
  );
}