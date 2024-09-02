// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2f412.firebaseapp.com",
  projectId: "mern-estate-2f412",
  storageBucket: "mern-estate-2f412.appspot.com",
  messagingSenderId: "126784803335",
  appId: "1:126784803335:web:68da349fc18329dbeb50a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);