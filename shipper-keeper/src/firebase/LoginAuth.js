import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged   } from "firebase/auth";
import {signOut } from "firebase/auth";
import { navigate } from "gatsby";
import { createContext } from 'react';

export var LoginStateContext = createContext(true);

const createUser = async(email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("User Created::", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error in signup  ::: ", errorCode, errorMessage);
      // ..
    });
  
}

const login = async(email,password) => {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("User login status: ", user);
      navigate("/");
      LoginStateContext = createContext(true);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error logging in ::: ", errorCode, errorMessage);
    });
}


const logout = async()=>{
    // change LoginStateContext to
    await signOut(auth).then(() => {
        // Sign-out successful.
        console.log("User is successfully logged out.")
        LoginStateContext = createContext(false);
        navigate('/');
      }).catch((error) => {
        // An error happened.
        console.log ("Error in logging out.");
     });
}

const getAuthStatus = async() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(" user is logged in as ", uid)
          // ...
        } else {
          // User is signed out
          console.log("user is signed out...")
          // ...
        }
      });
}
export {createUser, login, logout, getAuthStatus}