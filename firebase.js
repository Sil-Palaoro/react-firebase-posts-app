// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, deleteDoc, updateDoc, getDoc, collectionGroup } from "firebase/firestore";


// require("firebase/firestore");
// import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAFl7RBfhV8vgbjOff-elGk7UyAIj55ur4",
  authDomain: "react-blog-silvipalaoro.firebaseapp.com",
  projectId: "react-blog-silvipalaoro",
  storageBucket: "react-blog-silvipalaoro.firebasestorage.app",
  messagingSenderId: "319447413809",
  appId: "1:319447413809:web:eda6524defd449cd225110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// export const firestore = app.firestore;
export { db, collection, doc, addDoc, getDocs, deleteDoc, updateDoc, getDoc, collectionGroup };
