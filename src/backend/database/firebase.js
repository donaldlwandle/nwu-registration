import { initializeApp } from "firebase/app";
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDVkuInE1NjU6BhvbzQGm9N_gz09cXSzMg",
    authDomain: "nwu-registration.firebaseapp.com",
    projectId: "nwu-registration",
    storageBucket: "nwu-registration.appspot.com",
    messagingSenderId: "462601204341",
    appId: "1:462601204341:web:0871b1beb01a514078fe3c",
    measurementId: "G-W814W0FLJE"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const dataBase = firebase.firestore();
  const dataBaseAuthentication = firebase.auth();
  const dataBaseProvider = new firebase.GoogleAuthProvider();