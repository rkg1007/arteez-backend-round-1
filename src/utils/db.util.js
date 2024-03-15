import mongoose from "mongoose";
import * as config from "./config.util.js";

const MONGO_URI = config.get("MONGO_URI");

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
