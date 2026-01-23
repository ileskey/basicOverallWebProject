import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function Layout() {
    return (
        <div>
            <div style={{ position: "absolute", top: "0" }}>
                <Header />
            </div>
            <div style={{ position: "relative" }}>
                <main>
                    <Outlet />
                </main>
            </div>
            <div style={{ position: "relative", bottom: "0" }}>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
