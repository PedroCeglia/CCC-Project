// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getStorage} from 'firebase/storage'
import {getDatabase} from 'firebase/database'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn8dEjKHsAOwfFShkw9HhGBzlLB_8aKp4",
  authDomain: "ccc-project-f84dc.firebaseapp.com",
  projectId: "ccc-project-f84dc",
  storageBucket: "ccc-project-f84dc.appspot.com",
  messagingSenderId: "64469035932",
  appId: "1:64469035932:web:e3d944480bb0a3150e7659",
  measurementId: "G-DQK8KYB58D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase API`s Instance
export const storage = getStorage(app);
export const database = getDatabase(app);
export const auth = getAuth(app)