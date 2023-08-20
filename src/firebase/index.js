// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQZ2m02hJTEikojeD7BIgR6-IiEBPztRg",
  authDomain: "codereviewshop.firebaseapp.com",
  projectId: "codereviewshop",
  storageBucket: "codereviewshop.appspot.com",
  messagingSenderId: "267818206701",
  appId: "1:267818206701:web:ccfe5117a40bc003d213e4",
  measurementId: "G-159G14LV7Z",
};

initializeApp(firebaseConfig);

export const firebaseApp = {
  install(app, options) {
    return getApp();
  },
};

export const firestore = {
  install(app, options) {
    return getFirestore();
  },
};
