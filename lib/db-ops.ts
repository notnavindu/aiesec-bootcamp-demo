import { ObjectId } from "mongodb";
import { dbConnect } from "./mongodb";
import { User } from "./types/User";
import { Collections } from "./types/collections";
import { Slap } from "./types/Slap";

export const getAllUsers = async () => {
  const client = await dbConnect();
  const db = client.db();
  const usersCollection = db.collection(Collections.USERS);
  const users = await usersCollection.find({}).toArray();

  client.close();

  return users as User[];
};

export const getUserById = async (id: string) => {
  const client = await dbConnect();
  const db = client.db();
  const usersCollection = db.collection(Collections.USERS);
  const user = await usersCollection.findOne({ _id: new ObjectId(id) });

  client.close();

  return user as User;
};

export const slapUser = async (
  slapperId: string,
  slappeeId: string,
  count: number
) => {
  const client = await dbConnect();
  const db = client.db();
  const usersCollection = db.collection<User>(Collections.USERS);
  const slapsCollection = db.collection<Slap>(Collections.SLAPS);

  const [slapper, slappee] = await Promise.all([
    usersCollection.findOne({ _id: new ObjectId(slapperId) }),
    usersCollection.findOne({ _id: new ObjectId(slappeeId) }),
  ]);

  if (!slapper || !slappee) {
    throw new Error("Invalid ID");
  }

  await Promise.all([
    slapsCollection.insertOne({
      count: count,
      slappee: {
        _id: slappee?._id!,
        name: slapperId,
      },
      slapper: {
        _id: slapper?._id!,
        name: slapperId,
      },
    }),

    usersCollection.updateOne(
      { _id: slapper._id },
      {
        $inc: {
          slapsGiven: 1,
        },
      }
    ),
    usersCollection.updateOne(
      { _id: slappee._id },
      {
        $inc: {
          slapsRecieved: 1,
        },
      }
    ),
  ]);

  client.close();
};

export const getTopSlappers = async (id: string) => {
  const client = await dbConnect();
  const db = client.db();
  const usersCollection = db.collection(Collections.USERS);
  const user = await usersCollection.findOne({ _id: new ObjectId(id) });

  client.close();

  return user as User;
};
