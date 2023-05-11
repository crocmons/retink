// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdZc71dL20rRNmGfEqlXy2i7K_mqOPYKI",
  authDomain: "signup-3c26e.firebaseapp.com",
  projectId: "signup-3c26e",
  storageBucket: "signup-3c26e.appspot.com",
  messagingSenderId: "981042942787",
  appId: "1:981042942787:web:382502a4a6a05aa7ddd5f6",
  measurementId: "G-WHP4WJ0CQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
