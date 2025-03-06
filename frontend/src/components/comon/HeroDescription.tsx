interface HeroDescriptionProps {
    children: React.ReactNode;
}

export function HeroDescription({ children }: HeroDescriptionProps) {
    return (
        <p className="text-[var(--color-text)] text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-center px-4 md:px-0 transition-colors duration-300">
            {children}
        </p>
    );
}
