import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("mongo db is connected ");
  })
  .catch((err) => {
    console.log("the error is", err);
  });
app.listen(process.env.PORT, () => {
  console.log("server running on port 3002aaaaaaaa");
});
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
