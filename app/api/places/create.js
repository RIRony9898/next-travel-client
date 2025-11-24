import { createPlace } from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  try {
    const placeData = req.body;
    if (!placeData || !placeData.name || !placeData.location) {
      return res
        .status(400)
        .json({ message: "Missing required place data: name and location" });
    }

    const result = await createPlace(placeData);

    return res
      .status(201)
      .json({ message: "Place created", placeId: result.insertedId });
  } catch (error) {
    console.error("Error inserting place:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
