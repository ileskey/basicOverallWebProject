import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>푸터 내용</footer>
        </div>
    );
}

export default Layout;
