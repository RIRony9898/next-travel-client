import clientPromise from "./mongoDb";

const DEFAULT_DB = process.env.MONGODB_DB_NAME || undefined;

async function getDb(dbName = DEFAULT_DB) {
  const client = await clientPromise;
  // if dbName is undefined, `client.db()` will use the database from the connection string
  return client.db(dbName);
}

export async function getCollection(name, dbName) {
  const db = await getDb(dbName);
  return db.collection(name);
}

export async function createUser(userData, dbName) {
  const col = await getCollection("users", dbName);
  const result = await col.insertOne(userData);
  return result;
}

export async function getUserByEmail(email, dbName) {
  const col = await getCollection("users", dbName);
  return col.findOne({ email });
}

export async function createPlace(placeData, dbName) {
  const col = await getCollection("places", dbName);
  const result = await col.insertOne(placeData);
  return result;
}

export async function findPlaces(filter = {}, options = {}, dbName) {
  const col = await getCollection("places", dbName);
  return col.find(filter, options).toArray();
}

export default {
  getDb,
  getCollection,
  createUser,
  getUserByEmail,
  createPlace,
  findPlaces,
};
