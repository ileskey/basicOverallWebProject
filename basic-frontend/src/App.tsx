import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BookDetailPage from "./pages/BookDetailPage";
import BookListPage from "./pages/BookListPage";
import NewsPage from "./pages/NewsPage";
import Practice from "./pages/practice";
import "./App.css";

function App() {
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
                            element={<BookDetailPage />}
                        />
                        <Route path="/news" element={<NewsPage />} />
                        <Route
                            path="*"
                            element={<h1>404 - 페이지를 찾을 수 없습니다</h1>}
                        />
                    </Routes>
                </div>
            </div>

            <Link to="/practice">연습용</Link>
            <Routes>
                <Route path="/practice" element={<Practice />} />
            </Routes>
        </>
    );
}

export default App;
