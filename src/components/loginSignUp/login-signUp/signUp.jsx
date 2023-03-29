import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { auth } from "../../../firebase-config";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";

import { useState } from "react";
import { ErrorAlert } from "../../error/error";

export function SignUp() {
    const [emailInputValue, setEmailInputValue] = useState("")
    const [passwordInputValue, setPasswordInputValue] = useState("")
    // eslint-disable-next-line no-unused-vars
    const [userNameInputValue, setUserNameInputValue] = useState("")

    // eslint-disable-next-line no-unused-vars
    const [userEmail, setUserEmail] = useState(null)
    const [signUpError, setSignUpError] = useState(null)
    // eslint-disable-next-line no-unused-vars
    const [registeredUser, setRegisteredUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setRegisteredUser(currentUser)
    })

    function signUp(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
            .then((userData) => {
                const user = userData.user;
                setUserEmail(user.email);
            })
            .catch((error) => {
                console.log(error);
                if (error.code === "auth/email-already-in-use") { setSignUpError("This email is already in use") } else
                    if (error.code === "auth/invalid-email") { setSignUpError("Invalid email") } else
                        if (error.code === "auth/weak-password") { setSignUpError("Password should bea at least 6 characters") } else
                            if (error.code) setSignUpError("Something is wrong")
            });
    }

    return (
        <>
            <h2>Sign Up</h2>

            <Form onSubmit={signUp} style={{ display: "flex", flexDirection: "column" }}>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" name="email" placeholder="name@example.com" required onChange={(e) => setEmailInputValue(e.target.value)} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingName" label="User" className="mb-3">
                    <Form.Control type="text" name="user" placeholder="User Name" required onChange={(e) => setUserNameInputValue(e.target.value)} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" name="password" placeholder="Password" required onChange={(e) => setPasswordInputValue(e.target.value)} />
                </FloatingLabel>

                <Button variant="primary" type="submit" ons style={{ alignSelf: "center", marginTop: "15px" }}>
                    Submit
                </Button>
            </Form>

            {signUpError ? <ErrorAlert value={signUpError} /> : null}
        </>
    )
}