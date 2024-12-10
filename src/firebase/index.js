import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your firebaseConfig from Firebase Console here
const firebaseConfig = {
  apiKey: "AIzaSyCVZurZ7jwvQi3HZqn-GLz7vyb0A6i-l9g",
  authDomain: "summative-cc52f.firebaseapp.com",
  projectId: "summative-cc52f",
  storageBucket: "summative-cc52f.firebasestorage.app",
  messagingSenderId: "496380123965",
  appId: "1:496380123965:web:eaf68b8f712615ff798354"
};

const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };