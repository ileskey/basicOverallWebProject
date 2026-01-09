export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    category: string;
    image: string;
    rating: number;
    description: string;
    published_date: string; //YYYY-MM-DD
    publisher: string;
    isbn: string;
    stock: number;
}

export interface Review {
    id: number;
    book_id: number;
    author: string;
    rating: number;
    comment: string;
    created_date: string;
}
