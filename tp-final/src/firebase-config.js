// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFqm4VvDD2bgllX7OmGaIpZKeF8EWJnhQ",
  authDomain: "las-aguilas-5ecb8.firebaseapp.com",
  projectId: "las-aguilas-5ecb8",
  storageBucket: "las-aguilas-5ecb8.appspot.com",
  messagingSenderId: "494028673845",
  appId: "1:494028673845:web:2588dcbc010d02a2dcb27c",
  measurementId: "G-MGPW0Z4LC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);