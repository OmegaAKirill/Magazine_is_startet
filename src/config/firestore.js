// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_w4Kp6VIZoJVJV6YB5_Hs6KyiR4MJYuo",
  authDomain: "magaze-team3.firebaseapp.com",
  databaseURL: "https://magaze-team3-default-rtdb.firebaseio.com",
  projectId: "magaze-team3",
  storageBucket: "magaze-team3.appspot.com",
  messagingSenderId: "766231724029",
  appId: "1:766231724029:web:81e4672c5163419cfc2394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);