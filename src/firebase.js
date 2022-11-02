// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD7L5ldjRghlwIV73XRbEaHGTSZwsgAhBI",
  authDomain: "twitter-clone-e38a0.firebaseapp.com",
  projectId: "twitter-clone-e38a0",
  storageBucket: "twitter-clone-e38a0.appspot.com",
  messagingSenderId: "865987460700",
  appId: "1:865987460700:web:7c5c65c653a890b1c13099",
  measurementId: "G-923ZB36JV8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(firebaseConfig);

export default db;