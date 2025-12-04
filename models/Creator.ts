// models/Creator.ts
import { Schema, model, models, Document } from "mongoose";

export interface Follower {
  name: string;
  goal: string;
  level: string;
}

export interface CreatorDocument extends Document {
  name: string;
  email: string;
  category: string;
  password: string; // 👈 NEU
  followers: Follower[];
  createdAt: Date;
  updatedAt: Date;
}

const FollowerSchema = new Schema<Follower>(
  {
    name: { type: String, required: true },
    goal: { type: String, required: true },
    level: { type: String, required: true },
  },
  { _id: false }
);

const CreatorSchema = new Schema<CreatorDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    password: { type: String, required: true }, // 👈 NEU
    followers: { type: [FollowerSchema], default: [] },
  },
  { timestamps: true }
);

const CreatorModel =
  models.Creator || model<CreatorDocument>("Creator", CreatorSchema);

export default CreatorModel;
