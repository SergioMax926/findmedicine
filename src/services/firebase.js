import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: "AIzaSyBmm3M9V_1oMECV8SHEn6V272FJ64t3cvU",
    authDomain: "find-medicine-fa0bf.firebaseapp.com",
    projectId: "find-medicine-fa0bf",
    storageBucket: "find-medicine-fa0bf.appspot.com",
    messagingSenderId: "874680605440",
    appId: "1:874680605440:web:e338ffb5974816903971e5",
    measurementId: "G-3V0550D6P3",
  });
}

const db = firebase.firestore();

export { firebase, db };
