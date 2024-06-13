import mongoose from "mongoose";
import { config } from "./config";
import { error } from "console";
import chalk from "chalk";

const db = async () => {
  try {
    const db_url = config.DB_URL as string;
    await mongoose.connect(db_url).then(() => {
      console.log(chalk.yellow("Database connected"));
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default db;
