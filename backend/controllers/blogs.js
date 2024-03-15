import mongoose from "mongoose";
import Blogs from "../models/blogs.js";
import User from "../models/user.js";

export const createBlog = async (req, res) => {
  const { title, address, description, image, uid } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ uid });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: "An error occurred" });
  }

  try {
    const blog = new Blogs({
      title,
      address,
      description,
      image,
      user: existingUser._id,
    });

    const session = await mongoose.startSession();
    session.startTransaction();

    await blog.save({ session });
    existingUser.blogs.push(blog);
    await existingUser.save({ session });

    await session.commitTransaction();

    return res.status(201).json({ message: "Blog created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find();

    return res
      .status(200)
      .json({ message: "Blog retrieved successfully", blogs });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
};

export const updateBlogByID = async (req, res) => {
  const { id } = req.params;
  const { title, address, description, image } = req.body;

  try {
    const updatedBlog = await Blogs.findByIdAndUpdate(
      id,
      { title, address, description, image },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json({ message: "Updated", updatedBlog });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
};

export const deleteBlogByID = async (req, res) => {
  const { id } = req.params;
  const { uid } = req.body;

  try {
    const deletedBlog = await Blogs.findByIdAndDelete(id);

    try {
      async () => {
        await User.findByIdAndUpdate(uid, {
          $pull: { blogs: deletedBlog._id },
        });
      };
    } catch (err) {
      return console.log(err);
    }

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    await User.updateOne(
      { _id: deletedBlog.user },
      { $pull: { blogs: deletedBlog._id } }
    );

    return res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
};
