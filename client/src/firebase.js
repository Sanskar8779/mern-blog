// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-16e26.firebaseapp.com",
  projectId: "mern-blog-16e26",
  storageBucket: "mern-blog-16e26.appspot.com",
  messagingSenderId: "822544764964",
  appId: "1:822544764964:web:e97539c76436979d4b88b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);