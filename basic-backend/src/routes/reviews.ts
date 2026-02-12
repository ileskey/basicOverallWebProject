import express from "express";
import type { RowDataPacket } from "mysql2";
import pool from "../config/database.js";
import type { Review } from "../types/index.js";

const router = express.Router();

interface ReviewRow extends RowDataPacket, Review {}

router.get("/book/:bookId", async (req, res) => {
    try {
        const { bookId } = req.params;
        const [rows] = await pool.query<ReviewRow[]>(
            "SELECT * FROM reviews WHERE book_id = ? ORDER BY created_at DESC",
            [bookId]
        );
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { book_id, author, rating, comment } = req.body;
        const [result] = await pool.query(
            "INSERT INTO reviews (book_id, author, rating, comment) VALUES (?, ?, ?, ?)",
            [book_id, author, rating, comment]
        );

        res.status(201).json({
            message: "successfully reviewed.",
            id: (result as any).insertId,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;
