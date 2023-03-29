// import { auth } from "../firebase-config";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { useState } from "react";

// const [emailInputValue, setEmailInputValue] = useState("");
// const [passwordInputValue, setPasswordInputValue] = useState("");

// // eslint-disable-next-line no-unused-vars
// const [userEmail, setUserEmail] = useState(null);
// const [signUpError, setSignUpError] = useState(null);
// // eslint-disable-next-line no-unused-vars
// const [loggedUser, setLoggedUser] = useState({});

// onAuthStateChanged(auth, (currentUser) => {
//   setLoggedUser(currentUser);
// });

// function logIn(e) {
//   e.preventDefault();
//   signInWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
//     .then((userData) => {
//       const user = userData.user;
//       setUserEmail(user.email);
//       if (userData) console.log("logIn succesfully");
//     })
//     .catch((error) => {
//       console.log(error);
//       if (error.code === "auth/user-not-found") {
//         setSignUpError("User not found");
//       } else if (error.code === "auth/wrong-password") {
//         setSignUpError("Wrong password");
//       } else if (error.code) setSignUpError("Something is wrong");
//     });
// }
