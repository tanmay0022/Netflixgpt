// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBULlgg5vEcfLaVhCFRIFg6_fQsiDIkKfw",
  authDomain: "netflix-gpt-7f497.firebaseapp.com",
  projectId: "netflix-gpt-7f497",
  storageBucket: "netflix-gpt-7f497.firebasestorage.app",
  messagingSenderId: "898598085493",
  appId: "1:898598085493:web:abf71b8bc9c154158be93c",
  measurementId: "G-9TT8VXWWDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;