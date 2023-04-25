import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { ErrorAlert } from "../error/error";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFirebaseContext } from "../../firebase/firebaseContext";

export function SignUp() {
    const [userData, setUserData] = useState({
        email: "",
        userName: "",
        password: ""
    })
    const [signUpError, setSignUpError] = useState(null)

    const { signUp } = useFirebaseContext()

    const navigate = useNavigate()

    const handleInputValue = ({ target: { name, value } }) => {
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signUp(userData.email, userData.password)
            navigate('/home')
        } catch (error) {
            if (error.code === "auth/email-already-in-use") { setSignUpError("This email is already in use") } else
                if (error.code === "auth/invalid-email") { setSignUpError("Invalid email") } else
                    if (error.code === "auth/weak-password") { setSignUpError("Password should bea at least 6 characters") } else
                        if (error.code) setSignUpError("Something is wrong")

        }
    }

    return (
        <>
            <h2>Sign Up</h2>

            <Form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" name="email" placeholder="name@example.com" required onChange={handleInputValue} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingName" label="User" className="mb-3">
                    <Form.Control type="text" name="userName" placeholder="User Name" required onChange={handleInputValue} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" name="password" placeholder="Password" required onChange={handleInputValue} />
                </FloatingLabel>

                <Button variant="primary" type="submit" ons style={{ alignSelf: "center", marginTop: "15px" }}>
                    Sign Up
                </Button>
            </Form>

            {signUpError ? <ErrorAlert errorValue={signUpError} /> : null}
        </>
    )
}