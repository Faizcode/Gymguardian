import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const verifyJWT = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!(authorization && authorization.startsWith("Bearer "))) {
      return res.status(401).json({ message: "Unauthorized Access" });
    }

    const token = authorization.substring(7);

    // Verify and decode the JWT
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    // Find the user based on the decoded JWT's _id
    const existingUser = await User.findOne({ uid: decodedToken.uid });

    if (!existingUser) {
      return res.status(401).json({ message: "User Not Found in token" });
    } else {
      req.body.uid = existingUser.uid;
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Something went wrong, please try again in a few minutes",
    });
  }
};
