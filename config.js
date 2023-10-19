import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCaOf5jTg65RWUKB-WtsYuGXGyju2Ayoac",
  authDomain: "bicycle-f19ec.firebaseapp.com",
  projectId: "bicycle-f19ec",
  storageBucket: "bicycle-f19ec.appspot.com",
  messagingSenderId: "525320232075",
  appId: "1:525320232075:web:872d21c0b61b655f68888e"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
