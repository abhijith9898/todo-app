// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpMs0PHfn9bHS1m4dRlZqNNtwpaHela-4",
  authDomain: "crossplatform-49a0b.firebaseapp.com",
  projectId: "crossplatform-49a0b",
  storageBucket: "crossplatform-49a0b.appspot.com",
  messagingSenderId: "392838058534",
  appId: "1:392838058534:web:f1636ed65cdd9d02e70ce7",
  measurementId: "G-0H7YWY54FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export {db}