import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCMwfLnp7fynSiaoaFanAuzWdyIAkZCkLE",
        authDomain: "notepad-2001.firebaseapp.com",
        projectId: "notepad-2001",
        databaseURL: "https://notepad-2001-default-rtdb.firebaseio.com",
    })
};


export default firebase;