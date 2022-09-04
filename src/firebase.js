import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzO7W2-xa0hdvZd6pyfGKs3hV2aooqHTY",
  authDomain: "react-authentication-d9e2d.firebaseapp.com",
  projectId: "react-authentication-d9e2d",
  storageBucket: "react-authentication-d9e2d.appspot.com",
  messagingSenderId: "547115054398",
  appId: "1:547115054398:web:eb491012816c135a4f686f",
  measurementId: "G-0SLQBPZK1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
