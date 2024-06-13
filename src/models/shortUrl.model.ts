import mongoose, { Document } from "mongoose";

function generateId(length: number): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * chars.length);
    result += chars[random];
  }
  return result;
}

export interface ShortURL extends Document {
  shortId: string;
  destination: string;
}

const schema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      unique: true,
      required: true,
      default: generateId(6),
    },
    destination: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const shortUrl = mongoose.model<ShortURL>("shortUrl", schema);

export default shortUrl;
