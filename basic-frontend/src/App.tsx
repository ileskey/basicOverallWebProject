import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import NewsPage from "./pages/NewsPage";
import Practice from "./pages/practice";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log("버튼 클릭!");
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("폼 제출!");
    };

    return (
        <>
            <Header />
            <div>
                <nav style={{ padding: "20px", background: "#f0f0f0" }}>
                    <Link to="/" style={{ margin: "0 10px" }}>
                        홈
                    </Link>
                    <Link to="/books" style={{ margin: "0 10px" }}>
                        제품
                    </Link>
                    <Link to="/news" style={{ margin: "0 10px" }}>
                        뉴스
                    </Link>
                </nav>
                <div style={{ padding: "20px" }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/books" element={<BookListPage />} />
                        <Route
                            path="/products/:id"
                            element={<ProductDetailPage />}
                        />
                        <Route path="/news" element={<NewsPage />} />
                        <Route
                            path="*"
                            element={<h1>404 - 페이지를 찾을 수 없습니다</h1>}
                        />
                    </Routes>
                </div>
            </div>
            <div className="card">
                <p>count is {count}</p>
                <button onClick={() => setCount((count) => count + 1)}>
                    count up
                </button>
                <button onClick={() => setCount(0)}>clear</button>
                <button onClick={() => setCount((count) => count - 1)}>
                    count down
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <div className="card">
                <button onClick={handleClick}>클릭</button>
                <input onChange={handleChange}></input>
                <form onSubmit={handleSubmit}>
                    <button type="submit">제출</button>
                </form>
            </div>

            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <Link to="/practice">연습용</Link>
            <Routes>
                <Route path="/practice" element={<Practice />} />
            </Routes>
        </>
    );
}

export default App;
