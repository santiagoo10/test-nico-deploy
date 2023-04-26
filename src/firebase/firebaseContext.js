import { createContext, useContext, useEffect, useState } from "react";

import { auth } from "../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseContext = createContext();

export const useFirebaseContext = () => {
  const context = useContext(firebaseContext);
  return context;
};

export function FirebaseProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [firebaseLoading, setFirebaseLoading] = useState(false);

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => {
    signOut(auth);
    setFirebaseLoading(false);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setFirebaseLoading(true);
      setCurrentUser(currentUser);
      setFirebaseLoading(false);
    });

    return () => unsuscribe();
  }, []);

  return (
    <firebaseContext.Provider
      value={{ signUp, login, currentUser, logOut, firebaseLoading }}
    >
      {children}
    </firebaseContext.Provider>
  );
}
