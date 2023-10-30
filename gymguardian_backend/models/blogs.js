import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BLOGS_SCHEMA = new Schema({
  title: {
    type: String,
  },
  address: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  likes: Number,
  comments: [{ userName: String, description: String }],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Blogs", BLOGS_SCHEMA);
