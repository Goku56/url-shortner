import { Request, Response } from "express";
import {
  createShortUrl,
  handleRedirect,
} from "../controllers/shortUrl.controller";
import validation from "../middleware/validate";
import shortUrlValidation from "../models/shortUrl.validation";
import { getAnalytics } from "../controllers/analytics.controller";

const routes = require("express").Router();

routes.get("/health-check", (req: Request, res: Response) => {
  try {
    res.status(200).send("App is healthy");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

routes.post("/api/url", validation(shortUrlValidation), createShortUrl);

routes.get("/:shortid", handleRedirect);

routes.get("/api/analytics", getAnalytics);

export default routes;
