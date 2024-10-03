import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// database connection function (mongoDB)
const DBConnection = async () => {
  const USERNAME = process.env.DB_USERNAME;
  const PASSWORD = process.env.DB_PASSWORD;

  const MONGO_URI =
    "mongodb+srv://ppriyankuu:gamingxyz@crankycluster.0ufvbv4.mongodb.net/File_Sharing?retryWrites=true&w=majority";
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Error while connecting with the database ", err.message);
  }
};

export default DBConnection;
