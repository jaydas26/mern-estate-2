// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-27926.firebaseapp.com",
  projectId: "mern-estate-27926",
  storageBucket: "mern-estate-27926.appspot.com",
  messagingSenderId: "239305625292",
  appId: "1:239305625292:web:428f6b469070770ab9fc69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);