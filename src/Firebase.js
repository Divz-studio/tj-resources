// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, onSnapshot, doc, collection } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "tj-resources.firebaseapp.com",
  projectId: "tj-resources",
  storageBucket: "tj-resources.appspot.com",
  messagingSenderId: "1068378448911",
  appId: "1:1068378448911:web:d3219a17c955ba1be2af7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

const db = getFirestore()


export { auth, db }