import { Link } from "react-router-dom";
function HomePage() {
    return (
        <div>
            <h1>가짜 온라인 서점</h1>
            <p>환영합니다!</p>
            <Link to="/books">
                <button>제품 보러가기</button>
            </Link>
        </div>
    );
}

export default HomePage;
