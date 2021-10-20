import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firbaseSignOut, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBS-T3JAtcZ43QUzeMNeJLOjSCTFSJNm4",
    authDomain: "first-projectnt.firebaseapp.com",
    databaseURL: "https://first-projectnt-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "first-projectnt",
    storageBucket: "first-projectnt.appspot.com",
    messagingSenderId: "386071435048",
    appId: "1:386071435048:web:5c1368784f1f75a6b0621d",
    measurementId: "G-FNCPMH1PGQ"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getDatabase();

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
}

export const login = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};

export const signOut = async () => {
    await firbaseSignOut(auth);
}