import * as firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore"
import "firebase/auth";
import { getAuth } from "firebase/auth";

// UPDATE THE CONFIG VALUES IN LOCAL
const config =  {
    apiKey: "",
    authDomain: "web-shipper-keeper.firebaseapp.com",
    databaseURL: "",
    projectId: "web-shipper-keeper",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

  if (firebase.getApps().length===0) {
    firebase.initializeApp(config);
    console.log(getFirestore());
    console.log(getAuth());
}

const firestore = getFirestore()
const auth = getAuth()

export {firestore, auth}