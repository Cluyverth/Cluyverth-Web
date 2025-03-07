//text-[var(--color-text-secondary)] mb-6
export function ContentParagraph({ children }: { children: React.ReactNode }) {
  return <p className="text-[var(--color-text-secondary)] mb-6">{children}</p>
}
