import User from "../models/user.js";
import jwt from "jsonwebtoken";

function generateJWTToken(uid) {
  const payload = { uid };

  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1d" });

  return token;
}

export const loginUser = async (req, res, next) => {
  const { name, email, uid } = req.body;

  if (!uid || !name || !email) {
    return res.status(400).json({ message: "Invalid request" });
  }

  try {
    // Check if the user exists in the database
    let existingUser = await User.findOne({ uid });
    if (!existingUser) {
      // Create a new user if not found
      const token = generateJWTToken(uid);
      const user = new User({ uid, name, email });
      await user.save();
      return res
        .status(201)
        .json({ message: "ID token verified", user, jwt: token });
    } else {
      const token = generateJWTToken(uid);

      return res
        .status(201)
        .json({ message: "ID token verified", user: existingUser, jwt: token });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "An error occurred" });
  }
};

export const deleteUser = async (req, res, next) => {
  const { uid } = req.body;

  if (!uid) {
    return res.status(400).json({ message: "Invalid request" });
  }

  try {
    let existingUser = await User.findOne({ uid });

    if (!existingUser) {
      return res.status(201).json({ message: "No user found" });
    } else {
      User.deleteOne({ uid }).then(() => {
        res.status(200).json({ message: "User deleted successfully" });
      });
    }
  } catch (err) {
    return res.status(500).json({ message: "An error occurred" });
  }
};
