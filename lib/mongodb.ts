import { MongoClient } from "mongodb";

let globalWithMongoose = global as typeof globalThis & {
  mongoose: any;
};
let cached = globalWithMongoose.mongoose;

if (!cached) {
  cached = globalWithMongoose.mongoose = { conn: null, promise: null };
}

export const dbConnect = async () => {
  let client: MongoClient;
  try {
    client = await MongoClient.connect(process.env.MONGODB_URI as string);
    return client;
  } catch (error) {
    throw error;
  }
};
