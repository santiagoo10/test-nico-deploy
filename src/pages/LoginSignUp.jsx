import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import { Login } from "../components/loginSignUp/login";
import { SignUp } from "../components/loginSignUp/signUp";

import { useState } from "react";
import { Link } from "react-router-dom";

import pikachu from "../images/pikachu.png";

export function LoginSignUpPage() {
    const [buttonSelected, setfButtonSelected] = useState(null)

    function handleButton(e) {
        const clickValue = e.target.value
        setfButtonSelected(clickValue)
    }

    return (
        <main className="signUpLogin-container">
            <img src={pikachu} alt="Pikachu standing with a thinking look " className="signUpLogin-backgroundImage" />

            <section className="signUpLogin-section">
                <div className="signUpLogin-section-logo">
                    <img src="/images/pokemon.png" alt="" />
                    <h1>Pokemon Fts</h1>
                </div>

                <div className="signUpLogin-section-buttons">
                    <Link to='/signUp'>
                        <Button variant="dark" value="sign-up" onClick={handleButton} style={{ width: '100%' }}>Sign Up</Button>
                    </Link>
                    <Link to='/login'>
                        <Button variant="danger" value="login" onClick={handleButton} style={{ width: '100%' }}>Login</Button>
                    </Link>
                </div>

                {buttonSelected === "sign-up" ? <SignUp /> : buttonSelected === "login" ? <Login /> : null}
            </section>
        </main>
    )
}