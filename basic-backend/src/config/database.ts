import * as mysql from "mysql2/promise";
//const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "safter652420",
    database: "",
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
