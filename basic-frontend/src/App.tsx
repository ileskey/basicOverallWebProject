import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import BookDetailPage from "./pages/BookDetailPage";
import BookListPage from "./pages/BookListPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Practice from "./pages/practice";
import { booksLoader } from "./loaders/booksLoader";
import { bookLoader } from "./loaders/bookLoader";
import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "books",
                element: <BookListPage />,
                loader: booksLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "books/category/:category",
                element: <BookListPage />,
                loader: booksLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "books/:id",
                element: <BookDetailPage />,
                loader: bookLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "news",
                element: <NewsPage />,
            },
            {
                path: "practice",
                element: <Practice />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
