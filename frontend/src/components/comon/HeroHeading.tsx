interface HeroHeadingProps {
    children: React.ReactNode;
}
//text-4xl md:text-6xl font-extrabold mb-6 text-[var(--color-primary)] leading-tight transition-colors duration-300
export function HeroHeading({ children }: HeroHeadingProps) {
    return (
        <h1
            className="text-4xl sm:text-6xl md:text-6xl font-extrabold mb-6 text-[var(--color-primary)] leading-tight transition-colors duration-300"
        >
            {children}
        </h1>
    );
}
