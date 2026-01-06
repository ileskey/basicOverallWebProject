import * as mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const getEnvVar: (key: string) => string = (key) => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`환경 변수 ${key}가 설정되지 않았습니다.`);
    }
    return value;
};

const pool = mysql.createPool({
    host: getEnvVar("DB_HOST"),
    user: getEnvVar("DB_USER"),
    password: getEnvVar("DB_PASSWORD"),
    database: getEnvVar("DB_NAME"),
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
