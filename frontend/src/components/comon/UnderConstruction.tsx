import { FaHome } from "react-icons/fa";
import { ButtonLink } from "./ButtonLink";

export default function UnderConstruction() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-background)] text-[var(--color-text)] text-center px-6">
            <span className="text-6xl animate-bounce">🚧</span>
            <h1 className="text-4xl font-bold mt-4 text-[var(--color-base-content-strong)]">Page Under Construction</h1>
            <p className="mt-2 max-w-md text-[var(--color-muted-text)]">
                We're working hard to bring this page to life. Check back soon for updates!
            </p>
            <div className="mt-6">
                <ButtonLink
                    to="/"
                    icon={FaHome}
                    variant="primary"
                    size="md"
                >
                    Go Home
                </ButtonLink>
            </div>
        </div>
    );
}
