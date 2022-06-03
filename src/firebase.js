// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDpMWDAgqHcmELFi8EzNvOs2beqci2JnxQ",
    authDomain: "clone-955e6.firebaseapp.com",
    projectId: "clone-955e6",
    storageBucket: "clone-955e6.appspot.com",
    messagingSenderId: "339207409771",
    appId: "1:339207409771:web:c1544ec0c0339604a7a12e",
    measurementId: "G-XZ8ENRS55W"
  };


const firebaseApp=firebase.initializeApp(firebaseConfig)

//db in firebase
const db=firebaseApp.fireStore();
const auth=firebase.auth();


export {db,auth};