import type { LoaderFunctionArgs } from "react-router-dom";
import { fetchBookById } from "../data/books";
import type { ApiError } from "../types";
export async function bookLoader({ params }: LoaderFunctionArgs) {
    const { id } = params;
    try {
        const book = id ? await fetchBookById(id) : 0;
        console.log(book);
        return book;
    } catch (error: unknown) {
        const apiError = error as ApiError;
        if (
            apiError.message?.includes("fetch") ||
            apiError.code == "ECONNREFUSED"
        ) {
            throw new Response(
                "Cannot connect to server. Please try again later.",
                {
                    status: 503,
                    statusText: "Service unavailable",
                }
            );
        }
        throw new Response("Error in loading a book", {
            status: 500,
            statusText: "Internal Server Error",
        });
    }
}
