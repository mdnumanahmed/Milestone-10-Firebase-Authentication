// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2UmGFxjdeMro8PZQbKhwq1aNrXZV4LDs",
  authDomain: "ema-john-auth-context-private.firebaseapp.com",
  projectId: "ema-john-auth-context-private",
  storageBucket: "ema-john-auth-context-private.appspot.com",
  messagingSenderId: "399871628028",
  appId: "1:399871628028:web:024d95516503719d67fd79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;