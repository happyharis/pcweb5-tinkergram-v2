// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-ejRTc7Tmx9ApsvWR3gcVYZd6F8X4dcw",
  authDomain: "pcmob4-1.firebaseapp.com",
  projectId: "pcmob4-1",
  storageBucket: "pcmob4-1.appspot.com",
  messagingSenderId: "342461725457",
  appId: "1:342461725457:web:2d4f5fd50047d25da2aab0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
