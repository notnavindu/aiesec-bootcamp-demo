import { dbConnect } from "./mongodb";
import { User } from "./types/User";
import { Collections } from "./types/collections";

export const getAllUsers = async () => {
  const client = await dbConnect();
  const db = client.db();
  const usersCollection = db.collection(Collections.USERS);
  const users = await usersCollection.find({}).toArray();

  client.close();

  return users as User[];
};
