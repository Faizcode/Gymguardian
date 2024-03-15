import express from "express";
import { verifyJWT } from "../middleware/verifyJWT.js";
import {
  createBlog,
  deleteBlogByID,
  getAllBlogs,
  updateBlogByID,
} from "../controllers/blogs.js";

const blogsRouter = express.Router();

blogsRouter.post("/addBlog", verifyJWT, createBlog);
blogsRouter.get("/getBlogs", verifyJWT, getAllBlogs);
blogsRouter.put("/updateBlog/:id", verifyJWT, updateBlogByID);
blogsRouter.delete("/deleteBlog/:id", verifyJWT, deleteBlogByID);

export default blogsRouter;
