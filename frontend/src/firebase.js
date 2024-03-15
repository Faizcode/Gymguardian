// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI3nsffphWaIAxDaDJLKYwRuYy2SetGZY",
  authDomain: "gymguardian-135b1.firebaseapp.com",
  projectId: "gymguardian-135b1",
  storageBucket: "gymguardian-135b1.appspot.com",
  messagingSenderId: "656426409070",
  appId: "1:656426409070:web:03f159efbb1013256a1a7f",
  measurementId: "G-6019ESY4ZN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
