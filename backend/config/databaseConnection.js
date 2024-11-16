import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI;

export const databaseConnection = async () => {
  try {
    const conn = await mongoose.connect(uri);
    if (conn) {
      console.log("connected");
    } else {
      console.log("not connected");
    }
  } catch (error) {
    console.log(error);
  }
};
