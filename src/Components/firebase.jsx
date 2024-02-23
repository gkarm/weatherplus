// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVX93gULe-SqTISGQNlhrz8TX2HYFu4Tk",
    authDomain: "weatherplus-51c48.firebaseapp.com",
    projectId: "weatherplus-51c48",
    storageBucket: "weatherplus-51c48.appspot.com",
    messagingSenderId: "962047294014",
    appId: "1:962047294014:web:e3d070ccf0fa12a2916f6f",
    measurementId: "G-DQ1HZNGJS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}