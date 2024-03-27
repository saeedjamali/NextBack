import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        if (mongoose.connection?.readyState) {
            console.log("ONNNN")
            return {
                status: 200,
                message: "Connection is ready",
                isConnected: true
            }
        }
        await mongoose.connect("mongodb://localhost:27017/academy");
        console.log("OJJJJ")
        return {
            status: 200,
            message: "Connect To Db Successfully",
            isConnected: true
        }


    } catch (error) {
        return {
            status: 401,
            message: `Connect To Db Failed! : Error ${error}`,
            isConnected: false
        }
    }
}

export default connectToDB;
