import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { ErrorAlert } from "../error/error";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFirebaseContext } from "../../firebase/firebaseContext";

export function Login() {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [loginError, setLoginError] = useState(null)

    const { login } = useFirebaseContext()

    const navigate = useNavigate()

    const handleInputValue = ({ target: { name, value } }) => {
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await login(userData.email, userData.password)
            navigate('/home')
        } catch (error) {
            if (error.code === "auth/user-not-found") { setLoginError("User not found") } else
                if (error.code === "wrong-password") { setLoginError("Invalid password") } else
                    if (error.code) setLoginError("Something is wrong")
        }
    }

    return (
        <main className="login-container">
            <img src="/images/pikachu.png" alt="Pikachu standing with a thinking look " className="signUpLogin-backgroundImage" />

            <section className="login-section">
                <div className="signUpLogin-section-logo">
                    <img src="/images/pokemon.png" alt="Pokemon logo" />
                    <h1>Login</h1>
                </div>

                <Form onSubmit={handleSubmit} className="signUpLoginForm">
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control type="email" name="email" placeholder="name@example.com" required onChange={handleInputValue} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" name="password" placeholder="Password" required onChange={handleInputValue} />
                    </FloatingLabel>

                    <Button variant="primary" type="submit" style={{ alignSelf: "center", marginTop: "15px" }}>
                        Login
                    </Button>
                </Form>

                {loginError ? <ErrorAlert errorValue={loginError} /> : null}
            </section>
        </main>
    )
}