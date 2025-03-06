import { Link, useLocation } from "react-router";
import { ThemeToggle } from "./ThemeToggle";
import { ButtonLink } from "../comon/ButtonLink";

export function NavBar() {
    const location = useLocation();

    const base = "w-full z-40 backdrop-blur-lg border-b border-white/10 shadow-lg";
    const background = "bg-[var(--color-surface)]";
    const container = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";
    const linkStyle = "px-3 py-2 rounded-md text-md md:text-lg font-medium md:font-lg transition-colors duration-200";
    const activeLinkStyle = "text-[var(--color-primary)]";
    const inactiveLinkStyle = "text-[var(--base-content)] hover:text-[var(--color-primary)]";

    return (
        <nav className={`${base} ${background}`}>
            <div className={container}>
                <div className="flex items-center h-16">
                    {/* Avatar para PC (versão Large) */}
                    <div className="block flex-shrink-0">
                        <Link to="/home">
                            <div className="avatar cursor-pointer">
                                <div className="ring-[var(--color-primary)] ring-offset-base-100 w-10 h-10 rounded-full ring-2 ring-offset-2">
                                    <img
                                        src="https://github.com/Cluyverth.png"
                                        className="rounded-full"
                                        alt="Avatar"
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Links de navegação para PC (versão Large) */}
                    <div className="flex items-center md:space-x-5 flex-1 justify-center">
                        {["Home", "Projects", "About", "Contact", "Posts"].map((item) => {
                            const path = `/${item.toLowerCase()}`;
                            const isActive = location.pathname === path;

                            return (
                                <Link
                                    key={item}
                                    to={path}
                                    className={`${linkStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`}
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Botões e toggle para PC (versão Large) */}
                    <div className="flex items-center space-x-4">
                        <ButtonLink to="/seucaminho/blablabla.pdf" variant="secondary" size="sm" download={true}>Download CV</ButtonLink>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
