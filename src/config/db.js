import mongoose from "mongoose";
import env from "../utils/validEnv.js";

export const connectDB = async () => {
  try {
    if (!env.DATABASE_URI) {
      throw new Error("DATABASE_URI is not defined in the environment variables");
    }
    const conn = await mongoose.connect(env.DATABASE_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Optional: Add connection event listeners
    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err}`);
    });
    
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    process.exit(1);
  }
};

