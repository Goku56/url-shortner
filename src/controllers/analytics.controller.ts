import { Request, Response } from "express";
import analytics from "../models/analytics.model";

export const getAnalytics = async (req: Request, res: Response) => {
  try {
    const get = await analytics.find({});
    if (!get) return res.status(404).json({ message: "Not Found" });
    return res.status(200).json(get);
  } catch (err) {
    console.log(err);
  }
};

