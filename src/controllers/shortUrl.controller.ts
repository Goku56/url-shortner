import { Request, Response } from "express";
import shortUrl from "../models/shortUrl.model";
import analytics from "../models/analytics.model";

export const createShortUrl = async (req: Request, res: Response) => {
  try {
    const { destination } = req.body;
    if (!destination) {
      return res.status(400).json({ message: "Please enter valid url" });
    }
    const newUrl = await shortUrl.create({ destination });

    analytics.create({ shortUrl: newUrl._id });
    return res.status(200).json(newUrl);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const handleRedirect = async (req: Request, res: Response) => {
  try {
    const { shortid } = req.params;
    const url = await shortUrl.findOne({ shortId: shortid });
    if (!url) {
      return res.status(404).json({ message: "not found" });
    }
    return res.redirect(url.destination);
  } catch (err) {
    console.log(err);
  }
};
