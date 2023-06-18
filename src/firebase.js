import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, doc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD_w4Kp6VIZoJVJV6YB5_Hs6KyiR4MJYuo",
  authDomain: "magaze-team3.firebaseapp.com",
  databaseURL: "https://magaze-team3-default-rtdb.firebaseio.com",
  projectId: "magaze-team3",
  storageBucket: "magaze-team3.appspot.com",
  messagingSenderId: "766231724029",
  appId: "1:766231724029:web:81e4672c5163419cfc2394"
};

firebase.initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firestore = firebase.firestore();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const userId = result.user.uid;
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;
//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("profilePic", profilePic);
//       localStorage.setItem("userID", userId);
//       firestore
//         .collection("users")
//         .doc(userId)
//         .set({
//           name: localStorage.getItem("name"),
//           email: localStorage.getItem("email"),
//         });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// export const logOut = () => {
//   firebase
//     .auth()
//     .signOut()
//     .then(function () {})
//     .catch(function (error) {});
// };

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = localStorage.setItem(user.id);
//     console.log(uid);
//   } else {
//     // User is signed out
//     // ...
//   }
// });

// const usersRef = doc(
//   db,
//   "users",
//   "jThKOqJbDCPkdGQS0PBumP9vhat2",
//   "FavBooks",
//   "P0yHYk7Jzx5oxHMPDE4x"
// );


export default firebase;
