import { Outlet } from "react-router"
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SocialSidebar } from "../components/layout/SocialSidebar";

export function MainLayout() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <SocialSidebar />
        </>
    )
}
