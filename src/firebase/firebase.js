import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyByAWytFqy7MUJg7RbujAS7MZB8E-xIogM",
  authDomain: "jrszen-jrs.firebaseapp.com",
  projectId: "jrszen-jrs",
  storageBucket: "jrszen-jrs.appspot.com",
  messagingSenderId: "835550525294",
  appId: "1:835550525294:web:63ef6630f19efa4884f37f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }

export default app