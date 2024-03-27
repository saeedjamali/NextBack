// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectToDB from "@/utils/db";
import courseModel from "@/models/course"

const handler = async (req, res) => {
    const requestData = req.query;
    const responseData = req.body;
    const { status, isConnected, message } = await connectToDB();
    
    if (isConnected) {

        if (req.method == "GET") {


        }
        if (req.method == "POST") {
            try {
                const newCourse = await courseModel.create(responseData);
                if (newCourse) {
                    return res.status(200).json({ message: "User Has been Added ...", data: newCourse });
                } else {
                    return res.status(401).json({ message: "Failed add User ...", data: newCourse });
                }
            } catch (error) {
                return res.status(401).json({ message: "Unknown Error ...",error });
            }
        }
        if (req.method == "DELETE") { }
        if (req.method == "PUT") { }




    } else {
        res.status(500).json({ message: "No detail" });
    }

}

export default handler