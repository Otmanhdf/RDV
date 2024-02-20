// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {   getDoc,doc } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAXuKrNRz54Y92cPiFWpwiWbJK1pNu4gfk",
//   authDomain: "map-university-517b1.firebaseapp.com",
//   projectId: "map-university-517b1",
//   storageBucket: "map-university-517b1.appspot.com",
//   messagingSenderId: "891202343365",
//   appId: "1:891202343365:web:d4574bf2ac31f7359a3bac"
// };
const firebaseConfig = {
  apiKey: "AIzaSyB2RB4fvtHFMDdVzpFDeQhFKAEXzQmBq6M",
  authDomain: "hdfproject-4a7b2.firebaseapp.com",
  projectId: "hdfproject-4a7b2",
  storageBucket: "hdfproject-4a7b2.appspot.com",
  messagingSenderId: "974246392965",
  appId: "1:974246392965:web:5394f0b98f3a36cbaba5ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app)
export default auth;
export {db,doc,getDoc}