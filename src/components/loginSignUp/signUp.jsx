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
        <main className="signUp-container">
            <img src="/images/pikachu.png" alt="Pikachu standing with a thinking look " className="signUpLogin-backgroundImage" />

            <section className="signUp-section">
                <div className="signUpLogin-section-logo">
                    <img src="/images/pokemon.png" alt="Pokemon logo" />
                    <h1>Sign Up</h1>
                </div>

                <Form onSubmit={handleSubmit} className="signUpLoginForm">
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control type="email" name="email" placeholder="name@example.com" required onChange={handleInputValue} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" name="password" placeholder="Password" required onChange={handleInputValue} />
                    </FloatingLabel>

                    <Button variant="primary" type="submit" >
                        Sign Up
                    </Button>
                </Form>

                {signUpError ? <ErrorAlert errorValue={signUpError} /> : null}
            </section>
        </main>
    )
}