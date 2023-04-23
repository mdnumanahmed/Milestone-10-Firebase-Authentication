// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ1btaongGtUf_hYS8fjdawZlUgav0_Yk",
  authDomain: "news-dragon-na.firebaseapp.com",
  projectId: "news-dragon-na",
  storageBucket: "news-dragon-na.appspot.com",
  messagingSenderId: "173886178489",
  appId: "1:173886178489:web:b2025cedf96bff58260768"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;