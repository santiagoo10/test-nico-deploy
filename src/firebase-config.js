import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Handle keys with variable enviorements
  apiKey: "AIzaSyCFmQPeZneZ3l2FYd9xbtcxx5HKezVaAKg",
  authDomain: "pokemon-app-nft.firebaseapp.com",
  projectId: "pokemon-app-nft",
  storageBucket: "pokemon-app-nft.appspot.com",
  messagingSenderId: "371193472310",
  appId: "1:371193472310:web:f3ebc04404ed49d127bf97",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
