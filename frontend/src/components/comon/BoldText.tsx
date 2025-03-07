interface BoldTextProps {
  text: string;
  href?: string;
}

export default function BoldText({ text, href }: BoldTextProps) {
  return href ? (
    <a
      href={href}
      target="_blank"
      className="relative font-bold transition-colors duration-300 group"
      style={{
        color: "var(--color-accent)", // Usando a variável de cor do tema para o texto
      }}
    >
      {text}
      <span
        className="absolute -bottom-0.5 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
        style={{
          background: "linear-gradient(to right, var(--color-accent), var(--color-accent) 80%)", // Usando a variável de cor para o fundo do hover
        }}
      />
    </a>
  ) : (
    <span
      className="font-bold text-[var(--color-base-content-strong)]"
    >
      {text}
    </span>
  );
}
