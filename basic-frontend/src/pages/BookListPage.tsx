import { useState, useEffect } from "react";
import { fetchBooks, fetchBookById, fetchBooksByCategory } from "../data/books";
import BookCard from "../components/BookCard";
import type { Book } from "../types";

function BookListPage() {
    const [books, setBooks] = useState<Book[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBooks()
            .then((data) => setBooks(data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>로딩 중...</p>;

    if (books)
        return (
            <div>
                <h1>제품 목록</h1>
                <div>
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        );
}

export default BookListPage;
