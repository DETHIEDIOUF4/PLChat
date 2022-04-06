import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDnoLLJfZzU4uCX7B08q3qV3IQj9T1JTtw",
  authDomain: "mobile-project-8a847.firebaseapp.com",
  projectId: "mobile-project-8a847",
  storageBucket: "mobile-project-8a847.appspot.com",
  messagingSenderId: "876090638404",
  appId: "1:876090638404:web:2a8583dec090870fec7c11"
 // your config goes here
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

