// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYSO1cOsUeC1vK2kZ5NlvaZetu81RlJv4",
  authDomain: "smartbrainshop-540c0.firebaseapp.com",
  projectId: "smartbrainshop-540c0",
  storageBucket: "smartbrainshop-540c0.appspot.com",
  messagingSenderId: "696226202590",
  appId: "1:696226202590:web:169a6754ae5bce0bb5d34f",
  measurementId: "G-K73VRSV4HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);