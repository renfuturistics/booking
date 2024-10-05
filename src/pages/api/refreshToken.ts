import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { headers } = req;
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/api/auth/refresh";

  try {
    const { data, headers: returnedHeaders } = await axios.get(url, { headers });

    // Update headers on requester using headers from Node.js server response
    const setCookieHeader = returnedHeaders["set-cookie"];
    if (setCookieHeader) {
      res.setHeader("set-cookie", setCookieHeader);
    }
    Object.keys(returnedHeaders).forEach((key) => {
      res.setHeader(key, returnedHeaders[key] as string | number | readonly string[]);
    });

    res.status(200).json(data);
  } catch (error: any) {
    console.log(error)
    if (error.response) {
      // Handle the response error
      const { status, data } = error.response;
      res.status(status).json(data);
    } else {
      // Handle other error cases
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
