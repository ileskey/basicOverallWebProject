import { Link } from "react-router-dom";
function HomePage() {
    return (
        <div>
            <h1>전자제품 쇼핑몰</h1>
            <p>환영합니다!</p>
            <Link to="/products">
                <button>제품 보러가기</button>
            </Link>
        </div>
    );
}

export default HomePage;
