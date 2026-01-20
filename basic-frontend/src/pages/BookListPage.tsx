import { useLoaderData } from "react-router-dom";
import { fetchBooks, fetchBookById, fetchBooksByCategory } from "../data/books";
import BookCard from "../components/BookCard";
import type { Book } from "../types";

function BookListPage() {
    const books = useLoaderData() as Book[];

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
