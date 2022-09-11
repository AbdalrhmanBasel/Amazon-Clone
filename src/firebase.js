// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBJby1-o_3Ef-W6dhuV0QmY2bPy_U7YULs",
    authDomain: "clone-25b98.firebaseapp.com",
    projectId: "clone-25b98",
    storageBucket: "clone-25b98.appspot.com",
    messagingSenderId: "571838250532",
    appId: "1:571838250532:web:d8c9e1ecd4421726f062b1",
    measurementId: "G-CRPFRPJWPC",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth =firebase.auth();

export {db, auth}
