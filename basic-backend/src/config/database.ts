import * as mysql from "mysql2/promise";
//import "dotenv/config";
//const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
import dotenv from "dotenv";
dotenv.config();
const pool = mysql.createPool({
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

pool.getConnection()
    .then((connection) => {
        console.log("MySQL connection success!");
        connection.release();
    })
    .catch((err) => {
        console.error("MySQL connection FAIL:", err);
    });

export default pool;
