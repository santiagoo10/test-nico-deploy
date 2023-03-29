import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { auth } from "../../../firebase-config";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";

import { useState } from "react";
import { ErrorAlert } from "../../error/error";

export function Login() {
    const [emailInputValue, setEmailInputValue] = useState("")
    const [passwordInputValue, setPasswordInputValue] = useState("")

    // eslint-disable-next-line no-unused-vars
    const [userEmail, setUserEmail] = useState(null)
    const [signUpError, setSignUpError] = useState(null)
    // eslint-disable-next-line no-unused-vars
    const [loggedUser, setLoggedUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setLoggedUser(currentUser)
    })

    function logIn(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
            .then((userData) => {
                const user = userData.user;
                setUserEmail(user.email);
                if (userData) console.log('logIn succesfully');
            })
            .catch((error) => {
                console.log(error);
                if (error.code === "auth/user-not-found") { setSignUpError("User not found") } else
                    if (error.code === "auth/wrong-password") { setSignUpError("Wrong password") } else
                        if (error.code) setSignUpError("Something is wrong")
            });
    }

    return (
        <>
            <h2>Login</h2>

            <Form onSubmit={logIn} style={{ display: "flex", flexDirection: "column" }}>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" name="email" placeholder="name@example.com" required onChange={(e) => setEmailInputValue(e.target.value)} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" name="password" placeholder="Password" required onChange={(e) => setPasswordInputValue(e.target.value)} />
                </FloatingLabel>

                <Button variant="primary" type="submit" style={{ alignSelf: "center", marginTop: "15px" }}>
                    Submit
                </Button>
            </Form>

            {signUpError ? <ErrorAlert value={signUpError} /> : null}
        </>
    )
}