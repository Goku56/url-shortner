import express from "express";
import chalk from "chalk";
import cors from "cors";
import { config } from "./config";
import routes from "./routes/index";


const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);

const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(
    `Application listening at  ${chalk.blue("http://localhost:4000")}`
  );
});
