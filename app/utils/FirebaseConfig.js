// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {initializeFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



import { doc, setDoc,addDoc,collection ,getDoc} from "firebase/firestore"; 
import { Alert } from "react-native";

const firebaseConfig = {
    apiKey: "AIzaSyB91r-BJPhqsjUhGeJiXuPVzFbSGBjkzFc",
    authDomain: "servidores-fbed3.firebaseapp.com",
    projectId: "servidores-fbed3",
    storageBucket: "servidores-fbed3.appspot.com",
    messagingSenderId: "760822612822",
    appId: "1:760822612822:web:48a67340ef9ad0b8a20cf7",
    measurementId: "G-KF1Y19507P"
  
};
export const loadConfiguration=()=>{
   // Alert.alert("carga la configuracio!!!");
    const app = initializeApp(firebaseConfig);
    const db =initializeFirestore(app,{
        experimentalForceLongPolling: true,
    });
    initializeApp(firebaseConfig);
    global.dbCon=db;
    global.storage = getStorage(app);

}
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

