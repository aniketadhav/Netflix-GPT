// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5lZ_gx9-ZzO6Cy8OPDS3jjO0ga3GmaBY",
  authDomain: "netflixgpt-cabed.firebaseapp.com",
  projectId: "netflixgpt-cabed",
  storageBucket: "netflixgpt-cabed.appspot.com",
  messagingSenderId: "862893638747",
  appId: "1:862893638747:web:91ed47528ed549acd72b7e",
  measurementId: "G-DFBBWQXNPW"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);