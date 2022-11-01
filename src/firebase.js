import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase"
import "firebase-database" 
const firebaseConfig = {
  apiKey: "AIzaSyD7L5ldjRghlwIV73XRbEaHGTSZwsgAhBI",
  authDomain: "twitter-clone-e38a0.firebaseapp.com",
  projectId: "twitter-clone-e38a0",
  storageBucket: "twitter-clone-e38a0.appspot.com",
  messagingSenderId: "865987460700",
  appId: "1:865987460700:web:7c5c65c653a890b1c13099",
  measurementId: "G-923ZB36JV8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firetore();

export default db;