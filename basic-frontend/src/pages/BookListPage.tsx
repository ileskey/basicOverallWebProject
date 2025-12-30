import { useState } from "react";
import { books } from "../data/books";
import BookCard from "../components/BookCard";
function BookListPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const filteredProducts =
        selectedCategory === "all"
            ? books
            : books.filter((p) => p.category === selectedCategory);
    return (
        <div>
            <h1>제품 목록</h1>

            <div>
                <button onClick={() => setSelectedCategory("all")}>전체</button>
                <button onClick={() => setSelectedCategory("laptop")}>
                    노트북
                </button>
                <button onClick={() => setSelectedCategory("phone")}>
                    스마트폰
                </button>
            </div>
            <div>
                {filteredProducts.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
}

export default BookListPage;
