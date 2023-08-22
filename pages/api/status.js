import { createClient } from "contentful";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      });

      const response = await client.getEntries({ content_type: "status" });

      res.status(200).json(response.items[0]);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }
}
