import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHcQSNoNsY2lqqsYc-yV0pn_6pKBlLAH8",
  authDomain: "porto-dimxz.firebaseapp.com",
  projectId: "porto-dimxz",
  storageBucket: "porto-dimxz.firebasestorage.app",
  messagingSenderId: "154428218265",
  appId: "1:154428218265:web:d7c70da92417885ee19108",
  measurementId: "G-QHK3ZPZ453"
};	

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };