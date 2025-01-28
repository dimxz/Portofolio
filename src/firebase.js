import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHcQSNoNsY2lqqsYc-yV0pn_6pKBlLAH8",
  authDomain: "porto-dimxz.firebaseapp.com",
  projectId: "porto-dimxz",
  storageBucket: "porto-dimxz.firebasestorage.app",
  messagingSenderId: "154428218265",
  appId: "1:154428218265:web:d7c70da92417885ee19108",
  measurementId: "G-QHK3ZPZ453"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };