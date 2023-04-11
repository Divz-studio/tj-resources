// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJaYYJ4XK6uY8tZ19FerhsZD0Fp1vV-e0",
  authDomain: "tj-resources.firebaseapp.com",
  projectId: "tj-resources",
  storageBucket: "tj-resources.appspot.com",
  messagingSenderId: "1068378448911",
  appId: "1:1068378448911:web:d3219a17c955ba1be2af7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { auth }