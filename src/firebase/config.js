// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_s8AxzE77T8g3gRsVq-nVjAFareEw8Bc",
  authDomain: "ipl-auction-app.firebaseapp.com",
  projectId: "ipl-auction-app",
  storageBucket: "ipl-auction-app.appspot.com",
  messagingSenderId: "881540703805",
  appId: "1:881540703805:web:dda1dc0625b4eef65bac54",
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)
