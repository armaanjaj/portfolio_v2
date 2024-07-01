import mongoose from "mongoose";

let isConnected = false;

export async function dbConnect() {
    if (isConnected) {
        return;
    }

    try {
        const connection = await mongoose.connect(process.env.MONGO_URL!);

        isConnected = connection.connections[0].readyState === 1;

        if (isConnected) {
            console.log("MongoDB connected successfully");
        }
    } catch (error) {
        console.log(
            "MongoDB connection error. Please make sure MongoDB is running.\n" +
                error
        );
        process.exit(1);
    }
}
