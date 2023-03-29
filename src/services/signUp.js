// import { auth } from "../firebase-config";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { useState } from "react";

// const [userEmail, setUserEmail] = useState(null);
// const [signUpError, setSignUpError] = useState(null);
// const [registeredUser, setRegisteredUser] = useState({});

// onAuthStateChanged(auth, (currentUser) => {
//   setRegisteredUser(currentUser);
// });

// export function signUp(emailInputValue, passwordInputValue) {
//   createUserWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
//     .then((userData) => {
//       const user = userData.user;
//       setUserEmail(user.email);
//     })
//     .catch((error) => setSignUpError(error.code));

//   return { signUpError, userEmail, registeredUser };
// }
