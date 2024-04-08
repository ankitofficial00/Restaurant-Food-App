import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${DB_NAME}`
    );

    console.log(
      `Mongo DB connection established on ${connectionInstance} and its host is ${connectionInstance.connection.host}`
    );

    console.log("SERVER IS CONNECTED SUCCESSFULLY TO DATABASE");
  } catch (error) {
    console.log("Mondo Db connection error", error);
    process.exitCode(1);
  }
};

export default connectDB;
