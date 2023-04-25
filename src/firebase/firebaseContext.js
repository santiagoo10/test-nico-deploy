import { createContext, useContext, useState } from "react";

import { auth } from "../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseContext = createContext();

export const useFirebaseContext = () => {
  const context = useContext(firebaseContext);
  return context;
};

export function FirebaseProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onAuthStateChanged(auth, (currentUser) => setCurrentUser(currentUser));

  return (
    <firebaseContext.Provider value={{ signUp, login, currentUser }}>
      {children}
    </firebaseContext.Provider>
  );
}
