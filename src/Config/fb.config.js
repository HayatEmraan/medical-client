// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPYf-ufy4m42yRfXeRrZldcOvfBL7yaoE",
  authDomain: "doctor-medical.firebaseapp.com",
  projectId: "doctor-medical",
  storageBucket: "doctor-medical.appspot.com",
  messagingSenderId: "379555321951",
  appId: "1:379555321951:web:fe678eeeb80f596b3363ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;