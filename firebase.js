// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCae6uGrDwjgRwS40ZwhzeLp7ckevm2ryE",
    authDomain: "twitter-clone-b2b15.firebaseapp.com",
    projectId: "twitter-clone-b2b15",
    storageBucket: "twitter-clone-b2b15.appspot.com",
    messagingSenderId: "804154766373",
    appId: "1:804154766373:web:840731defbb36fd0e63bcc"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
