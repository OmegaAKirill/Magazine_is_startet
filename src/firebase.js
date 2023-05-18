import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyD_w4Kp6VIZoJVJV6YB5_Hs6KyiR4MJYuo",
  authDomain: "magaze-team3.firebaseapp.com",
  databaseURL: "https://magaze-team3-default-rtdb.firebaseio.com",
  projectId: "magaze-team3",
  storageBucket: "magaze-team3.appspot.com",
  messagingSenderId: "766231724029",
  appId: "1:766231724029:web:81e4672c5163419cfc2394"
};


const fireDb = firebase.initializeApp(firebaseConfig)
export default fireDb.database().ref()