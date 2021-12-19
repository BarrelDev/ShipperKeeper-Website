import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from './firebase/auth';
import React from "react"
import firebase from "gatsby-plugin-firebase"
import { useObjectVal } from "react-firebase-hooks/database"

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

  function firebaseInit() {
    const [data, setData] = React.useState(null)
    const [data, isLoading] = useObjectVal(firebase.database().ref("data"))
  
    return <div>{isLoading ? "Loading..." : data}</div>
  }
  
  export default firebaseInit
  export {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut}
