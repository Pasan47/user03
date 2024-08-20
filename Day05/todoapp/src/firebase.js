// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDkcLVMMM6Ipw4d-11KnGDWGTpqneqRlI",
  authDomain: "testtodo-ec486.firebaseapp.com",
  projectId: "testtodo-ec486",
  storageBucket: "testtodo-ec486.appspot.com",
  messagingSenderId: "945930468255",
  appId: "1:945930468255:web:d5a1bff87f4bdbc8dc1baa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);