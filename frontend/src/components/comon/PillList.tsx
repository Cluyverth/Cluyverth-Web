import { Pill } from "./Pill";
interface PillListProps {
  skills: Record<string, string[]>;
  hidden_sm?: boolean;
}

export function PillList({ skills, hidden_sm = false }: PillListProps) {
  return (
    <>
      <div className={`space-y-6 ${hidden_sm ? 'hidden sm:block' : ''}`}>
        {Object.entries(skills).map(([category, techs], index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-xl font-semibold text-[var(--color-base-content-strong)]">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech, key) => (
                <Pill key={key} tech={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}