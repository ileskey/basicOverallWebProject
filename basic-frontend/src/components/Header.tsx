import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <button>
                    <Link to="/">홈</Link>
                </button>
                <button>
                    <Link to="/books">제품</Link>
                </button>
            </nav>
        </header>
    );
}

export default Header;
