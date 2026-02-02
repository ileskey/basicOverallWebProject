import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={{ width: "85vw" }}>
            <nav
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    backgroundColor: "lightgray",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "0.5rem",
                    }}
                >
                    <button>
                        <Link to="/">홈</Link>
                    </button>
                    <button>
                        <Link to="/books">제품</Link>
                    </button>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button>로그인</button>
                    <button>회원가입</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
