import mongoose from "mongoose";

export async function dbConnect() {
    try {
        mongoose.connect(process.env.MONGO_URL!); // '!' used to tell the compiler that it doesn't need to worry as we are always going to have the MONGO_URL or in other words, it is never going to be empty or null
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB connected successfully");
        });

        connection.on("error", (err) => {
            console.log(
                "MongoDB connection error. Please make sure MongoDB is running.\n" +
                    err
            );
            process.exit();
        });
    } catch (error) {
        console.log("Something went wrong!");
        console.log(error);
    }
}
