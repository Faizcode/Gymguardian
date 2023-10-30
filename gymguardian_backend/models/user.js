import mongoose from "mongoose";

const Schema = mongoose.Schema;

const USER_SCHEMA = new Schema({
  uid: { type: String, required: true },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  blogs: [{ type: mongoose.Types.ObjectId, ref: "Blogs" }],
});

export default mongoose.model("User", USER_SCHEMA);
