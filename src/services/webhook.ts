import { createHmac } from "crypto";
import { NextApiRequest } from "next";

const secret = process.env.WEBHOOK_SECRET;

function getPrismicWebookIsAuth(req: NextApiRequest) {
  try {
    if(req.body.secret === secret) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }

  return false;
}

async function getGithubWebookIsAuth(rawBody: string, signature?: string | string[]) {
  try {
    const expectedSignature = "sha256=" + createHmac("sha256", secret as string)
      .update(rawBody)
      .digest("hex");

    if (signature === expectedSignature) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }

  return false;
}


export {
  getPrismicWebookIsAuth,
  getGithubWebookIsAuth
};

