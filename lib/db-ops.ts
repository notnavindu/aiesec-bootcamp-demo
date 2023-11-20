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
      createdAt: new Date(),
      slappee: {
        _id: slappee?._id!,
        name: slappee.name,
        image: slappee.image,
      },
      slapper: {
        _id: slapper?._id!,
        name: slapper.name,
        image: slapper.image,
      },
    }),

    usersCollection.updateOne(
      { _id: slapper._id },
      {
        $inc: {
          slapsGiven: count,
        },
      }
    ),
    usersCollection.updateOne(
      { _id: slappee._id },
      {
        $inc: {
          slapsRecieved: count,
        },
      }
    ),
  ]);

  client.close();
};

export const getTopSlappers = async () => {
  const client = await dbConnect();
  const db = client.db();
  const usersCollection = db.collection<User>(Collections.USERS);
  const users = await usersCollection
    .find({ slapsGiven: { $gt: 0 } })
    .sort({ slapsGiven: -1 })
    .limit(6)
    .toArray();

  client.close();

  return users as User[];
};

export const getTopSlappees = async () => {
  const client = await dbConnect();
  const db = client.db();
  const usersCollection = db.collection<User>(Collections.USERS);
  const users = await usersCollection
    .find({ slapsRecieved: { $gt: 0 } })
    .sort({ slapsRecieved: -1 })
    .limit(6)
    .toArray();

  client.close();

  return users as User[];
};

export const getSlapFeed = async () => {
  const client = await dbConnect();
  const db = client.db();
  const slapsCollection = db.collection<Slap>(Collections.SLAPS);
  const feed = await slapsCollection.find({}).sort({ createdAt: -1 }).toArray();

  console.log(feed);
  client.close();

  return feed as Slap[];
};
