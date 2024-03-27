// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectToDB from "@/utils/db";
import userModel from "@/models/user"

const handler = async (req, res) => {
    const { id } = req.query;
    const responseData = req.body;
    const { status, isConnected, message } = await connectToDB();

    if (isConnected) {

        if (req.method == "GET") {
            const getUsers = await userModel.find({ _id: id }).populate("course").lean();
            return res.status(200).json({ message: "User Has been Added ...", data: getUsers });
        }
        if (req.method == "POST") {
            try {
                const newUser = await userModel.create(responseData);
                if (newUser) {
                    return res.status(200).json({ message: "User Has been Added ...", data: newUser });
                } else {
                    return res.status(401).json({ message: "Failed add User ...", data: newUser });
                }
            } catch (error) {
                return res.status(401).json({ message: "Unknown Error ...", error });
            }
        }
        if (req.method == "DELETE") { }
        if (req.method == "PUT") {
            try {
                const newUser = await userModel.findOneAndUpdate({ _id: id }, { responseData });
                if (newUser) {
                    return res.status(200).json({ message: "User Has been Updated ...", data: newUser });
                } else {
                    return res.status(401).json({ message: "Failed Updated User ...", data: newUser });
                }
            } catch (error) {
                return res.status(401).json({ message: "Unknown Error ...", error });
            }
        }




    } else {
        res.status(500).json({ message: "No detail" });
    }

}

export default handler