import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { headers, body } = req;
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/api/auth/login";
console.log(url)
  try {
    const { data, headers: returnedHeaders } = await axios.post(
      url, // Node.js backend path
      body // Login body (email + password)
      // Headers from the Next.js Client
    );

    // Update headers on the response object using headers from Node.js server response
    Object.entries(returnedHeaders).forEach((keyArr) => {
      res.setHeader(keyArr[0], keyArr[1] as string);
      console.log(keyArr[0], keyArr[1] as string);
    });

    res.send(data); // Send data from Node.js server response
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
