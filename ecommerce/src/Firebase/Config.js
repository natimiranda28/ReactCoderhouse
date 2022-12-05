import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBXEAGpHxBeNa6BXrpBurxw_0rLKc5LT4",
  authDomain: "coderhouse-ecommerce-dfc88.firebaseapp.com",
  projectId: "coderhouse-ecommerce-dfc88",
  storageBucket: "coderhouse-ecommerce-dfc88.appspot.com",
  messagingSenderId: "445720687047",
  appId: "1:445720687047:web:6a1467c2c80a731d80a9e2",
  measurementId: "G-PNC309VNYW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);