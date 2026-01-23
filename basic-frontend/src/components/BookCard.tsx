import { Link } from "react-router-dom";
import type { Book } from "../types";
import styles from "./BookCard.module.css";

interface BookCardProps {
    book: Book;
}

function bookCard({ book }: BookCardProps) {
    return (
        <Link to={`/books/${book.id}`} className={styles.card}>
            <img
                src={"http://localhost:5000/images/" + book.image + ".jpg"}
                alt={book.title}
                className={styles.image}
            />
            <h3 className={styles.title}>{book.title}</h3>
            <p className={styles.author}>{book.author}</p>
            <p className={styles.price}>{book.price.toLocaleString()}원</p>
            <p className={styles.rating}>{book.rating}</p>
        </Link>
    );
}

export default bookCard;
