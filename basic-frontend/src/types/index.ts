export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    rating: number;
    description: string;
}

export interface Review {
    id: number;
    productId: number;
    author: string;
    rating: number;
    comment: string;
}
