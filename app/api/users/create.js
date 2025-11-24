import { createUser } from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  try {
    const userData = req.body;
    if (!userData || !userData.email || !userData.name) {
      return res
        .status(400)
        .json({ message: "Missing required user data: name and email" });
    }

    const result = await createUser(userData);

    return res
      .status(201)
      .json({ message: "User created", userId: result.insertedId });
  } catch (error) {
    console.error("Error inserting user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
