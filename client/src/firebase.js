// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c2086.firebaseapp.com",
  projectId: "mern-blog-c2086",
  storageBucket: "mern-blog-c2086.appspot.com",
  messagingSenderId: "15328757497",
  appId: "1:15328757497:web:82f42d25f43c4631e14428",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
