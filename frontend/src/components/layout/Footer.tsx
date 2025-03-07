import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="fixed bottom-0 w-full z-100 backdrop-blur-lg border-t border-white/10 shadow-lg bg-[rgba(var(--color-surface),0.8)]">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <span className="text-sm text-[var(--color-text)]">
                        &copy; {new Date().getFullYear()} Cluyverth W.
                    </span>
                    <div className="flex space-x-6">
                        {[
                            { href: "https://github.com/cluyverth", icon: <FaGithub /> },
                            { href: "https://linkedin.com/in/cluyverth", icon: <FaLinkedin /> },
                            { href: "https://youtube.com/c/cluyverth", icon: <FaYoutube /> },
                        ].map(({ href, icon }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-300"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
