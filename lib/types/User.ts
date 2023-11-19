import { ObjectId } from "mongodb";

export interface User {
  _id?: ObjectId;
  name: string;
  email: string;
  image: string;
  slapsGiven: number;
  slapsRecieved: number;
}
