// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH58v5_5DuKxsD3kRuW95iZfcMuVDNl2o",
  authDomain: "react-cursos-873a8.firebaseapp.com",
  projectId: "react-cursos-873a8",
  storageBucket: "react-cursos-873a8.appspot.com",
  messagingSenderId: "22346511986",
  appId: "1:22346511986:web:4da396b4702d69e9eef4eb"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
