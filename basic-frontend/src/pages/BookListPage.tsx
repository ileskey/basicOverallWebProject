import { useLoaderData, useParams, Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import type { Book } from "../types";
import styles from "./BookListPage.module.css";
function BookListPage() {
    const books = useLoaderData() as Book[];
    const { category } = useParams();
    const getButtonClass = (isActive: boolean) => {
        return isActive
            ? `${styles.filterButton} ${styles.filterButtonActive}`
            : styles.filterButton;
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {category ? `${category} 카테고리` : "전체 책 목록"}
            </h1>
            <div className={styles.filterButton}>
                <Link to="/books" className={getButtonClass(!category)}>
                    전체
                </Link>
                <Link
                    to="/books/category/programming"
                    className={getButtonClass(category === "programming")}
                >
                    프로그래밍
                </Link>
                <Link
                    to="/books/category/novel"
                    className={getButtonClass(category === "novel")}
                >
                    소설
                </Link>
                <Link
                    to="/books/category/science"
                    className={getButtonClass(category === "science")}
                >
                    과학
                </Link>
            </div>
            <div className={styles.booksGrid}>
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
}

export default BookListPage;
