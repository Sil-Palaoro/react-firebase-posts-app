import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, deleteDoc, updateDoc, getDoc, collectionGroup } from "firebase/firestore";
import dotenv from 'dotenv'; 

dotenv.config();

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-blog-silvipalaoro.firebaseapp.com",
  projectId: "react-blog-silvipalaoro",
  storageBucket: "react-blog-silvipalaoro.firebasestorage.app",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// export const firestore = app.firestore;
export { db, collection, doc, addDoc, getDocs, deleteDoc, updateDoc, getDoc, collectionGroup };


// var firebaseConfig = {
//   apiKey: "AIzaSyAFl7RBfhV8vgbjOff-elGk7UyAIj55ur4",
//   authDomain: "react-blog-silvipalaoro.firebaseapp.com",
//   projectId: "react-blog-silvipalaoro",
//   storageBucket: "react-blog-silvipalaoro.firebasestorage.app",
//   messagingSenderId: "319447413809",
//   appId: "1:319447413809:web:eda6524defd449cd225110"
// };