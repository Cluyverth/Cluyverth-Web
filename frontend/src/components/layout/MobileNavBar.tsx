import { useState } from "react";
import { Link, useLocation } from "react-router";
import { ThemeToggle } from "./ThemeToggle";
import { ButtonLink } from "../comon/ButtonLink";

export function MobileNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const base = "w-full z-40 backdrop-blur-lg border-b border-white/10 shadow-lg";
    const container = "max-w-5xl mx-auto px-4 px-6";
    const linkStyle = "block px-4 py-2 text-lg text-center";
    const activeLinkStyle = "text-[var(--color-primary)]";
    const inactiveLinkStyle = "text-[var(--base-content)] hover:text-[var(--color-primary)]";

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleLinkClick = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 30);
    };

    const menuLinks = ["Home", "Projects", "About", "Contact", "Posts"];

    return (
        <nav>
            <div className={`${base} ${container}`}>
                {/* Navbar Mobile (versões md e sm) */}
                <div>
                    <div className="flex items-center justify-between h-16 z-60">
                        {/* Hamburger Button */}
                        <div>
                            <label className="swap swap-rotate">
                                <input type="checkbox" checked={isOpen} onChange={handleToggle} />

                                {/* Hamburger icon */}
                                <svg
                                    className={`swap-off fill-current ${isOpen ? "hidden" : "block"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                                </svg>

                                {/* Close icon */}
                                <svg
                                    className={`swap-on fill-current ${isOpen ? "block" : "hidden"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 512 512"
                                >
                                    <polygon
                                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
                                    />
                                </svg>
                            </label>
                        </div>

                        {/* Right-aligned buttons (Download CV and Theme Toggle) */}
                        <div className="flex items-center space-x-4">
                            {/* Download CV Button - only visible on tablet (md) and above */}
                            <div>
                                <ButtonLink to="/seucaminho/blablabla.pdf" variant="secondary" size="sm" download={true}>Download CV</ButtonLink>
                            </div>

                            {/* Theme Toggle - always visible on mobile and tablet */}
                            <div>
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* Mobile Menu */}
                <div
                    className={`${isOpen ? "block" : "hidden"} 
                    bg-[var(--color-base-200)] opacity-97   
                    transform transition-all duration-300 ease-in-out rounded-md`}
                >
                    <div className="flex flex-col items-center space-y-4 py-6">
                        {menuLinks.map((item) => {
                            const path = `/${item.toLowerCase()}`;
                            const isActive = location.pathname === path;

                            return (
                                <Link
                                    key={item}
                                    to={path}
                                    className={`${linkStyle} 
                        ${isActive ? activeLinkStyle : inactiveLinkStyle} 
                        transition-colors duration-300 
                        border-1 border-[var(--color-primary)] rounded-lg hover:-translate-y-1 hover:border-[var(--color-primary)]/90 hover:shadow-lg w-full max-w-[calc(100%-5rem)] px-4 py-2 mx-auto`}
                                    onClick={handleLinkClick}
                                >
                                    <strong>{item}</strong>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}
