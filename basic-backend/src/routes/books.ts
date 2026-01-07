import express from "express";
import type { RowDataPacket } from "mysql2";
import pool from "../config/database.js";
import type { Book } from "../types/index.js";

const router = express.Router();

interface BookRow extends RowDataPacket, Book {}

// response whole book data
router.get("/", async (req, res) => {
    try {
        const [rows] = await pool.query<BookRow[]>("SELECT * FROM books");
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// URL example
// http://localhost:5000/api/books/category/novel
router.get("/category/:category", async (req, res) => {
    try {
        const { category } = req.params;
        console.log(category);
        const [rows] = await pool.query<BookRow[]>(
            "SELECT * FROM books WHERE category = ?",
            [category]
        );
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// URL example
// http://localhost:5000/api/books/id
router.get("/:id", async (req, res) => {
    console.log("id=");
    try {
        const { id } = req.params;
        console.log(`id=${id}`);
        const [rows] = await pool.query<BookRow[]>(
            "SELECT * FROM books WHERE id = ?",
            [id]
        );
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// URL example
// http://localhost:5000/api/books/search/keyword
router.get("/search/:keyword", async (req, res) => {
    try {
        const { keyword } = req.params;
        console.log(`keyword=${keyword}`);
        const [rows] = await pool.query<BookRow[]>(
            "SELECT * FROM books WHERE title LIKE ? OR author LIKE ?",
            [`%${keyword}%`, `%${keyword}%`]
        );
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

export default router;
