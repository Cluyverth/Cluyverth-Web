import { Link } from "react-router";
import { IconType } from "react-icons";

interface ButtonLinkProps {
    to: string;
    icon?: IconType;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    download?: boolean;
}

export function ButtonLink({
    to,
    icon: Icon,
    children,
    variant = 'primary',
    size = 'md',
    download = false
}: ButtonLinkProps) {
    const baseClasses = "inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4";

    const variants = {
        primary: 'btn btn-primary hover:opacity-90 focus:ring-[var(--color-primary)]',
        secondary: 'btn btn-secondary hover:opacity-90 focus:ring-[var(--color-secondary)]',
        ghost: 'text-[var(--color-text)] hover:bg-[var(--color-surface)] focus:ring-[var(--color-surface)]'
    };

    const sizes = {
        sm: 'btn-sm px-4 py-2 text-sm text-center rounded-full font-small',
        md: 'btn-md px-6 py-3 text-base text-center rounded-lg font-medium',
        lg: 'btn-lg px-8 py-4 text-lg text-center rounded-lg font-medium'
    };

    const hoverEffects = 'hover:-translate-y-0.5 hover:shadow-xl active:scale-95';

    // Estilos dinâmicos com base no tamanho
    const dynamicStyles = size === 'sm' ? { fontSize: '0.875rem', padding: '0.5rem 0.75rem' }
        : size === 'md' ? { fontSize: '1rem', padding: '0.75rem 1rem' }
        : size === 'lg' ? { fontSize: '1.125rem', padding: '1rem 1.25rem' }
        : {};

    return (
        <Link
            to={to}
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${hoverEffects}`}
            download={download}
            target={download ? "_blank" : undefined}
            style={dynamicStyles} // Aplicando os estilos dinâmicos
        >
            {/* Renderiza o ícone apenas se ele for fornecido */}
            {Icon && <Icon className={`w-5 h-5 ${size === 'sm' ? 'mr-2' : 'mr-3'}`} />}
            {children}
        </Link>
    );
}
