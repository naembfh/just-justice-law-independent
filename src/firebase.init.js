// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKCx3YRAAS68-L0H5QJVJbSwmmWiWwKU4",
    authDomain: "single-lawyer.firebaseapp.com",
    projectId: "single-lawyer",
    storageBucket: "single-lawyer.appspot.com",
    messagingSenderId: "10115731746",
    appId: "1:10115731746:web:cd05f71c52d11d3f49957b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;