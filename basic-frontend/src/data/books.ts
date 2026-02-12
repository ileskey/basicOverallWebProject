import type { Book } from "../types";
const API_URL = "http://localhost:5000/api";

export const fetchBooks = async (): Promise<Book[]> => {
    const response = await fetch(`${API_URL}/books`);
    return response.json();
};
export const fetchBookById = async (id: string): Promise<Book[]> => {
    const response = await fetch(`${API_URL}/books/${id}`);
    console.log(`Log[${Date.UTC}]fetchBookById: `);
    return response.json();
};
export const fetchBooksByCategory = async (
    category: string
): Promise<Book[]> => {
    const response = await fetch(`${API_URL}/books/category/${category}`);
    return response.json();
};
