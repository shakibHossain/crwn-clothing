import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBVxupbKv3pKkbzo41H7Gay4RJdUATyaek",
  authDomain: "crown-db-38f62.firebaseapp.com",
  projectId: "crown-db-38f62",
  storageBucket: "crown-db-38f62.appspot.com",
  messagingSenderId: "771478817309",
  appId: "1:771478817309:web:de98c38679ae7a451ed4f4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
