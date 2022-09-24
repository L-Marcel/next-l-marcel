import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";
import { getGithubWebookIsAuth } from "../../../services/webhook";

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

async function revalidatePagesWithGithubData(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if(req.method === "POST") {
    const isAuth = await getGithubWebookIsAuth(req);
    
    if(!isAuth) {
      return res.status(401).json({
        message: "[Github Webhook]: Unauthorized request."
      });
    }
    
    if(req.headers["x-github-event"] === "push") {
      const buf = await buffer(req);
      const rawBody = buf.toString();
      console.log(rawBody);
      
      /*
      const data = JSON.parse(rawBody);
      
      console.log(data);

      await Promise.all([
        revalidatePath(res, "projects"),
        revalidatePath(res, `projects/${data?.repository?.name?.toLowerCase()}`)
      ]);*/
    }

    return res.status(200).json({
      message: "[Github Webhook]: Revalidate request received."
    });
  } else {
    return res.status(404).json({});
  }
}

export default revalidatePagesWithGithubData;