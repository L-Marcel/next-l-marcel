import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function req(req: NextApiRequest, res: NextApiResponse) {
  const buf = await buffer(req);
  const rawBody = buf.toString();

  const data = JSON.parse(rawBody);

  console.log(data.repository.name);

  return res.status(200).json({
    rawBody,
    data: data?.repository?.name
  });
}