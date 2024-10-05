import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { headers } = req;
    const url = process.env.NEXT_PUBLIC_BASE_URL + "/api/auth/profile";
    console.log(headers);
    const authorizationHeader = headers.authorization;

    const { data } = await axios.get(url, {
      headers: {
        Authorization: authorizationHeader,
      },
    });
    res.send(data);
  } catch (error: any) {
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
