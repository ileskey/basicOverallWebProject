import * as mysql from "mysql2/promise";
//import "dotenv/config";
//const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
import dotenv from "dotenv";
dotenv.config();

let getEnvVar: (key: string) => string = (key) => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`환경 변수 ${key}가 설정되지 않았습니다.`);
    }
    return value;
};

const pool = mysql.createPool({
    host: getEnvVar("DB_HOST"),
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
