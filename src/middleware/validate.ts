import { AnyObjectSchema } from "yup";
import { Request, Response, NextFunction } from "express";

const validation =
  (resourceSchema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await resourceSchema.validate({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (err) {
      res.status(400).json(err);
    }
  };

export default validation;
