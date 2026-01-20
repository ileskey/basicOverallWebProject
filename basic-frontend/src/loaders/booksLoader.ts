import type { LoaderFunctionArgs } from "react-router-dom";
import { fetchBooks, fetchBooksByCategory } from "../data/books";
import type { ApiError } from "../types/index";
export async function booksLoader({ params }: LoaderFunctionArgs) {
    const { category } = params;
    try {
        const books = category
            ? await fetchBooksByCategory(category)
            : await fetchBooks();
        return books;
    } catch (error: unknown) {
        const apiError = error as ApiError;
        if (
            apiError.message?.includes("fetch") ||
            apiError.code === "ECONNREFUSED"
        ) {
            throw new Response(
                "Cannot connect to server. Please try again later.",
                {
                    status: 503,
                    statusText: "Service Unavailable",
                }
            );
        }
        throw new Response("Error in loading books.", {
            status: 500,
            statusText: "Internal Server Error",
        });
    }
}
