// lib/mongoDb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local");
}

const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development use a global variable so that the value is preserved across module reloads
  if (!globalThis._mongoClient) {
    globalThis._mongoClient = new MongoClient(uri, options);
    globalThis._mongoClientPromise = globalThis._mongoClient.connect();
  }
  client = globalThis._mongoClient;
  clientPromise = globalThis._mongoClientPromise;
} else {
  // In production create a new client for each lambda invocation (or use connection pooling provided by the driver)
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise; // resolves to a connected MongoClient
