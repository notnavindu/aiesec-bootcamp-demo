import { ObjectId } from "mongodb";

export interface Slap {
  slapper: { _id: ObjectId; name: string };
  slappee: { _id: ObjectId; name: string };
  count: number;
}
