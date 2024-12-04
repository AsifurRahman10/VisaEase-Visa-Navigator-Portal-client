// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoUNpOKqwuoFAvEWKNJNcJ46k9qsCl5P4",
    authDomain: "visaease-website.firebaseapp.com",
    projectId: "visaease-website",
    storageBucket: "visaease-website.firebasestorage.app",
    messagingSenderId: "855380389934",
    appId: "1:855380389934:web:1e80b366b9bcf8fbbeafbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);