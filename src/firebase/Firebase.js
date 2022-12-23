import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDt-RBDCuF0PmEnXoNWxPQ85-XtHz1bEoc",
  authDomain: "ecommerce-a65d5.firebaseapp.com",
  projectId: "ecommerce-a65d5",
  storageBucket: "ecommerce-a65d5.appspot.com",
  messagingSenderId: "329606399895",
  appId: "1:329606399895:web:5b09665724c701534f26d2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
