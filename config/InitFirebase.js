import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBpUoKPA3Iz5XpjCslXKUbESydlhBMA3A4",
    authDomain: "service-app-e79c6.firebaseapp.com",
    databaseURL: "https://service-app-e79c6.firebaseio.com",
    projectId: "service-app-e79c6",
    storageBucket: "service-app-e79c6.appspot.com",
    messagingSenderId: "412950428259",
    appId: "1:412950428259:web:8ef93a46374f7f9e2bd656"
};

var fb = firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();


export default fb;