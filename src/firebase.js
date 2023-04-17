// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPnKND--LsryIY9hHYG3GTPvxC_JHjpGg",
  authDomain: "therealestate-37e8d.firebaseapp.com",
  projectId: "therealestate-37e8d",
  storageBucket: "therealestate-37e8d.appspot.com",
  messagingSenderId: "277900729467",
  appId: "1:277900729467:web:a6f1d5fff7f9130ba016de",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
