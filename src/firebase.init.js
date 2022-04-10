// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7s_KLKw-drFKD4gfEE77Z3OjNS4HXX2M",
  authDomain: "ema-john-simple-e2257.firebaseapp.com",
  projectId: "ema-john-simple-e2257",
  storageBucket: "ema-john-simple-e2257.appspot.com",
  messagingSenderId: "854091032827",
  appId: "1:854091032827:web:af9b46f79296a43ab9a85e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export default auth;