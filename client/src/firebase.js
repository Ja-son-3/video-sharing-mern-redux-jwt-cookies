import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "video-11a24.firebaseapp.com",
  projectId: "video-11a24",
  storageBucket: "video-11a24.appspot.com",
  messagingSenderId: "896340115794",
  appId: "1:896340115794:web:7f67248affbff482243a8b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app