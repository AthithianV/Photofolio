import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB84_SfWmrfRXhGd0sNZ6nxFpWFSUNf7gg",
  authDomain: "photofolio-162a7.firebaseapp.com",
  projectId: "photofolio-162a7",
  storageBucket: "photofolio-162a7.appspot.com",
  messagingSenderId: "52009619517",
  appId: "1:52009619517:web:82549a45a482b069ce1a54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;