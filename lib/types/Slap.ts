import { ObjectId } from "mongodb";

export interface Slap {
  _id?: ObjectId;
  slapper: { _id: ObjectId; name: string; image: string };
  slappee: { _id: ObjectId; name: string; image: string };
  count: number;
  createdAt?: Date;
}
