// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvD54cUDFj3oAEoFQJ30YvOyyLJ_dblcA",
  authDomain: "fir-auth-mna.firebaseapp.com",
  projectId: "fir-auth-mna",
  storageBucket: "fir-auth-mna.appspot.com",
  messagingSenderId: "872342012193",
  appId: "1:872342012193:web:54aa60a74b0b3f70263e60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;