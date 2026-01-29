import { useLoaderData, Link } from "react-router-dom";
import type { Book } from "../types";
import styles from "./BookDetailPage.module.css";
function BookDetailPage() {
    const book = (useLoaderData() as Book[])[0];
    console.log(`BookDetailPage\n ${book}`);
    console.log(`Date: ${book.published_date}`);
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.imageSection}>
                    <img
                        src={`http://localhost:5000/images/${book.image}.jpg`}
                        alt={book.title}
                        className={styles.image}
                    />
                </div>

                <div className={styles.infoSection}>
                    <h1 className={styles.title}>{book.title}</h1>
                    <p className={styles.author}>{book.author}</p>
                    <p className={styles.price}>{book.price}원</p>
                    <p className={styles.rating}>{book.rating}점</p>

                    <div className={styles.infoGrid}>
                        <div className={styles.infoLabel}>출판사</div>
                        <div className={styles.infoValue}>{book.publisher}</div>

                        <div className={styles.infoLabel}>출판일</div>
                        <div className={styles.infoValue}>
                            {book.published_date.substring(0, 10)}
                        </div>

                        <div className={styles.infoLabel}>ISBN</div>
                        <div className={styles.infoValue}>{book.isbn}</div>

                        <div className={styles.infoLabel}>재고</div>
                        <div className={styles.infoValue}>{book.stock}</div>

                        <div className={styles.infoLabel}>카테고리</div>
                        <div className={styles.infoValue}>{book.category}</div>
                    </div>

                    <div className={styles.description}>
                        <p>{book.description}</p>
                    </div>
                </div>
            </div>
            <Link to="/books" className={styles.backButton}>
                목록으로 돌아가기
            </Link>
        </div>
    );
}

export default BookDetailPage;
