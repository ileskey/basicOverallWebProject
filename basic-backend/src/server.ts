import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/books.js";

const app = express();
const PORT = 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.use("/api/books", router);

app.get("/", (req, res) => {
    res.json({ message: "online bookstore API" });
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
