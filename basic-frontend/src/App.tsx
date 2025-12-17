import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://vite.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
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
