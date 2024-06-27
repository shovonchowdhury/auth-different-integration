// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPdN-PVzgybbFZ8RIMZJt_nLUqPIbRIoo",
  authDomain: "auth-different-integration.firebaseapp.com",
  projectId: "auth-different-integration",
  storageBucket: "auth-different-integration.appspot.com",
  messagingSenderId: "530514889930",
  appId: "1:530514889930:web:f075aba5d728daf7eab833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;