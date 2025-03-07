import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaChevronLeft } from 'react-icons/fa';

export function SocialSidebar() {
    const [visible, setVisible] = useState(true);
    let timeout: number;

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleMouseEnter = () => {
        clearTimeout(timeout);
        setVisible(true);
    };

    const handleMouseLeave = () => {
        timeout = window.setTimeout(() => {
            setVisible(false);
        }, 500);
    };

    return (
        <div className="hidden md:block">
            {/* Área de gatilho invisível para abrir a sidebar */}
            <div className="fixed right-0 top-0 h-full w-10 z-40" onMouseEnter={() => setVisible(true)}></div>

            {/* Sidebar corrigida */}
            <div
                className={`fixed right-0 top-1/2 transform -translate-y-1/2 w-16 h-120 p-4 rounded-l-lg backdrop-blur-lg transition-all duration-300 z-50 flex items-center justify-center
                    ${visible ? 'right-0' : 'right-[-100%]'}
                `}
                style={{ backgroundColor: "var(--color-bg-transparent)" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ul className="flex flex-col space-y-4">
                    {[
                        { href: "https://github.com/cluyverth", icon: <FaGithub size={24} /> },
                        { href: "https://linkedin.com/in/cluyverth", icon: <FaLinkedin size={24} /> },
                        { href: "https://youtube.com/c/cluyverth", icon: <FaYoutube size={24} /> }
                    ].map(({ href, icon }, index) => (
                        <li key={index}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-300"
                            >
                                {icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Ícone de seta para indicar que a sidebar existe */}
            {!visible && (
                <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
                    <FaChevronLeft size={24} className="text-[var(--color-text)]" />
                </div>
            )}
        </div>
    );
}
