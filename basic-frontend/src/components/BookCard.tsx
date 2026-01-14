import { Link } from "react-router-dom";
import type { Book } from "../types";

interface BookCardProps {
    book: Book;
}

function bookCard({ book }: BookCardProps) {
    return (
        <div>
            <img src={book.image} alt={book.title} width="150" height="200" />
            <h3>{book.title}</h3>
            <p>{book.price.toLocaleString()}원</p>
            <Link to={`/books/${book.id}`}>상세보기</Link>
        </div>
    );
}

export default bookCard;
