// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCBTeoHQ2eo2LbhvTLpO2jkQ9YJLGRAATQ",
  authDomain: "davesaah-tests.firebaseapp.com",
  projectId: "davesaah-tests",
  storageBucket: "davesaah-tests.appspot.com",
  messagingSenderId: "543723979787",
  appId: "1:543723979787:web:1d45ef0448fea8868b730e",
  measurementId: "G-7KY6K70SWF",
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

export const analytics = () => {
  getAnalytics(firebaseApp)
};
