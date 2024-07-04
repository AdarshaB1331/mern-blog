import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://adarsha:laHLyvDvEaDFN4uT@mern-blog.woptneo.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog"
  )
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

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    sucess: false,
    statusCode,
    message,
  });
});
