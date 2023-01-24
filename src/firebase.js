import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnTLh-ESYcuk-0joeeubZvoTal-geVy3w",
  authDomain: "qura-clone-nir.firebaseapp.com",
  projectId: "qura-clone-nir",
  storageBucket: "qura-clone-nir.appspot.com",
  messagingSenderId: "342536920550",
  appId: "1:342536920550:web:0f60764171dadf3f2b0a27",
  measurementId: "G-1SFTSBJ983"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
