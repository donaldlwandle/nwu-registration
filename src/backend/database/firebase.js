import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

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
  const dataBase = getFirestore(firebaseApp);
  const dataBaseAuth = getAuth(firebaseApp);

  console.log('FIREBASE :' , firebaseApp);

  export {firebaseApp , dataBase};
  