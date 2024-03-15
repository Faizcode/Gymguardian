import express from "express";
import { loginUser } from "../controllers/user.js";
import { FirebaseAuthToken } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/login", FirebaseAuthToken, loginUser);

export default userRouter;
