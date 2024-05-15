import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDDn1n1ghrn6ZJ7fG42phzNepwBoCUMj10",
  authDomain: "lwitter-reloaded.firebaseapp.com",
  projectId: "lwitter-reloaded",
  storageBucket: "lwitter-reloaded.appspot.com",
  messagingSenderId: "605188862799",
  appId: "1:605188862799:web:7aa4822980587c6f504b3a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);
export const db = getFirestore(app);
