import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">홈</Link>
                <Link to="/products">제품</Link>
            </nav>
        </header>
    );
}

export default Header;
