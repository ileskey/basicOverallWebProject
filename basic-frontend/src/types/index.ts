export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    category: string;
    image: string;
    rating: number;
    description: string;
    published_date: string;
    publisher: string;
    isbn: string;
    stock: number;
}

export interface Review {
    id: number;
    productId: number;
    author: string;
    rating: number;
    comment: string;
}

export interface ApiResponse<T> {
    data: T;
    status: number;
    message?: string;
}

export interface ApiError {
    status: number;
    message: string;
    code?: string;
}
