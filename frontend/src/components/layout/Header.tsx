import { MobileNavBar } from "./MobileNavBar";
import { NavBar } from "./NavBar";

export function Header() {
    const base = "fixed top-0 left-0 z-50 w-full flex justify-between items-center";

    return (
        <header className={`${base}`}>
            {/* NavBar visible on larger screens (>= 1024px) */}
            <div className="hidden sm:block w-full">
                <NavBar />
            </div>

            {/* MobileNavBar visible on smaller screens (< 1024px) */}
            <div className="block sm:hidden w-full">
                <MobileNavBar />
            </div>
        </header>
    );
}
