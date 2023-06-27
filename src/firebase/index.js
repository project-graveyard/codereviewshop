// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";

const firebaseInit = initializeApp(
  {
    apiKey: "AIzaSyDQZ2m02hJTEikojeD7BIgR6-IiEBPztRg",
    authDomain: "codereviewshop.firebaseapp.com",
    projectId: "codereviewshop",
    storageBucket: "codereviewshop.appspot.com",
    messagingSenderId: "267818206701",
    appId: "1:267818206701:web:ccfe5117a40bc003d213e4",
    measurementId: "G-159G14LV7Z",
  },
  "firebaseApp"
);

export const firebaseApp = {
  install(app, options) {
    firebaseInit;
    getApp("firebaseApp");
  },
};

export const analytics = {
  install(app, options) {
    getAnalytics(firebaseInit);
  },
};

export const firestore = {
  install(app, options) {
    getFirestore(firebaseInit);
  },
};

const db = getFirestore(firebaseInit);
export const feedbackDB = collection(db, "feedback");
export const suggestionsDB = collection(db, "suggestion");
