import admin from "firebase-admin";
import { serviceAccount } from "../gymguardian.js";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const FirebaseAuthToken = async (req, res, next) => {
  const { _id } = req.body;

  try {
    if (!_id) {
      return res.status(401).json({ message: "Please Provide UserID" });
    }
    const decodedToken = await admin.auth().verifyIdToken(_id);
    req.body.uid = decodedToken.uid;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid ID token" });
  }
};
