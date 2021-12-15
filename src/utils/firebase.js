import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCmYRvoC9lKKLfWFrAe2kXsuNt_xD62rGU",
  authDomain: "testing-firebase-db73a.firebaseapp.com",
  projectId: "testing-firebase-db73a",
  storageBucket: "testing-firebase-db73a.appspot.com",
  messagingSenderId: "485083405432",
  appId: "1:485083405432:web:832dc9884948fedf22618d",
  measurementId: "G-SFXQ218DQ2"
});

const db = firebaseApp.firestore();
export { db };
