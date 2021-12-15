import {initializeApp} from "firebase/app";
import { getFirestore } from "@firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCmYRvoC9lKKLfWFrAe2kXsuNt_xD62rGU",
  authDomain: "testing-firebase-db73a.firebaseapp.com",
  projectId: "testing-firebase-db73a",
  storageBucket: "testing-firebase-db73a.appspot.com",
  messagingSenderId: "485083405432",
  appId: "1:485083405432:web:832dc9884948fedf22618d",
  measurementId: "G-SFXQ218DQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);