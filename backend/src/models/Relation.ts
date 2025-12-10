import { Schema, model, Document, Types } from "mongoose";

export interface IRelation extends Document {
  sourceUserId: Types.ObjectId;
  targetUserId: Types.ObjectId;
  type: "follow" | "friend";
  createdAt: Date;
}

const relationSchema = new Schema<IRelation>(
  {
    sourceUserId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    targetUserId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["follow", "friend"], default: "follow" },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const Relation = model<IRelation>("Relation", relationSchema);
