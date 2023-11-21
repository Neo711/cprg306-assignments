// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByccBntYoitnHG7ewGXD3caJS4z7yScys",
  authDomain: "cprg306-assignments-acef5.firebaseapp.com",
  projectId: "cprg306-assignments-acef5",
  storageBucket: "cprg306-assignments-acef5.appspot.com",
  messagingSenderId: "1049638546350",
  appId: "1:1049638546350:web:084fa22118c94104a5763f",
  measurementId: "G-53C5GPYR5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);