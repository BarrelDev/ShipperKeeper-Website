import "./src/styles/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./src/styles/palette.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyBV6QrJMAhuiDD2DofZvOR4FAIE48jT6IQ",
    authDomain: "shipperkeeper-7a75a.firebaseapp.com",
    projectId: "shipperkeeper-7a75a",
    storageBucket: "shipperkeeper-7a75a.appspot.com",
    messagingSenderId: "315456486414",
    appId: "1:315456486414:web:3afd5681599ed885bc105f",
    measurementId: "G-KSK23DHXPC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  