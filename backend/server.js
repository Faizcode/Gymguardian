import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/database.js";
import userRouter from "./routes/user.js";
import blogsRouter from "./routes/blogs.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Use specified router
app.use("/users", userRouter);
app.use("/blogs", blogsRouter);

// Connect the Database
connectDB();

app.listen(process.env.PORT || 4000, cors(), (req, res) => {
  console.log(`The server is now active at port ${process.env.PORT}`);
});
