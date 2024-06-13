import dotenv from "dotenv";
dotenv.config();

const { PORT,DB_URL } = process.env;

export const config = {
  PORT: PORT,
  DB_URL: DB_URL,
};
