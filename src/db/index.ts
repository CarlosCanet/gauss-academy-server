// ℹ️ Mongoose (ODM) handles the connection to MongoDB and provides schema-based modeling.
import { connect } from "mongoose";
import Enrollment from "../models/Enrollment.model.js";

// ℹ️ Connects to MongoDB using the URI from environment variables.
async function connectDB() {
  try {
    const response = await connect(process.env.MONGODB_URI ?? "");
    if (response && response.connections[0]) {
      const dbName = response.connections[0].name;
      console.log(`Connected to Mongo! Database name: "${dbName}"`);
    }
    await Enrollment.syncIndexes();
  } catch (error) {
    console.error("Error connecting to mongo: ", error);
    process.exit(1); // Exit the process with an error code
  }
}

export default connectDB;