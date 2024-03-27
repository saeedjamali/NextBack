// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectToDB from "@/utils/db";

const handler = async (req, res) => {
  const requestData = req.query;
  const responseData = req.body;
  const { status, isConnected, message } = await connectToDB();
  if (isConnected) {
    res.status(200).json({ message: "Connect db is ready ..." });
    if (req.method == "GET") {


    }
    if (req.method == "POST") {

    }
    if (req.method == "DELETE") { }
    if (req.method == "PUT") { }




  } else {
    res.status(400).json({ message: "Connect to db Failed" });
  }

}

export default handler
