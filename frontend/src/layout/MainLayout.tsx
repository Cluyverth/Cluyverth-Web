import { Outlet } from "react-router"
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SocialSidebar } from "../components/layout/SocialSidebar";

interface MainLayoutProps {
    isLoaded: boolean;
}


export function MainLayout({ isLoaded }: MainLayoutProps) {

    return (
        <>
            <Header isLoaded={isLoaded} />
            <Outlet />
            <Footer />
            <SocialSidebar />
        </>
    )
}
