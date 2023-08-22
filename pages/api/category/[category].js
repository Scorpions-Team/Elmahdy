import { createClient } from "contentful";

export default async function handler(req, res) {
  const { category } = req.query;
  if (req.method === "GET") {
    try {
      const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      });

      const response = await client.getEntries({
        content_type: "item",
        "fields.category": category,
      });

      res.status(200).json(response.items);
    } catch (error) {
      // console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }
}
