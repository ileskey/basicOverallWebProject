import dotenv from "dotenv";
dotenv.config();
const getEnvVar = (key: string): string => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`환경 변수 ${key}가 설정되지 않았습니다.`);
    }
    return value;
};
console.log(process.env.DB_HOST);
console.log(getEnvVar("DB_HOST"));
console.log(process.env.DB_HOSS);
console.log(getEnvVar("DB_HOSS"));
