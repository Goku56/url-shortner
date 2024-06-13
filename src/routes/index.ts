import { Request, Response } from "express";

const routes = require("express").Router();

routes.get("/health-check", (req: Request, res: Response) => {
  try {
    res.status(200).send("App is healthy");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default routes;
