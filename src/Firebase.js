import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMCodgUB2-HaA3Bx244QyVXpJIWUzoylY",
  authDomain: "listed-b9160.firebaseapp.com",
  projectId: "listed-b9160",
  storageBucket: "listed-b9160.appspot.com",
  messagingSenderId: "1054822066593",
  appId: "1:1054822066593:web:3a1c40e521e6229f5b83e0",
  measurementId: "G-B5C68GX8C3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
