import mongoose from "mongoose";

const connection: { isConnected?: number } = {};
export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const mongoURL = process.env.MONGO_DB;
    if (!mongoURL) throw new Error("No Mongo URL specified ");
    const db = await mongoose.connect(mongoURL);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected To DB");
  } catch (err) {
    console.log(err);
    throw new Error("Error connecting to db");
  }
};
