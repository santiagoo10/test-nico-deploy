import "../components/loginSignUp/loginSignUp.css"

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import { Login } from "../components/loginSignUp/login";
import { SignUp } from "../components/loginSignUp/signUp";

import { useState } from "react";

export function LoginSignUpPage() {
    const [buttonSelected, setfButtonSelected] = useState(null)

    function handleButton(e) {
        const clickValue = e.target.value
        setfButtonSelected(clickValue)
    }

    return (
        <main style={{ padding: "0" }}>
            <img src="/images/pikachu.png" alt="Pikachu standing with a thinking look " className="backgroundImage" />
            <section>
                <div className="logo-h1">
                    <img src="/images/pokemon.png" alt="" />
                    <h1>Pokemon Ft</h1>
                </div>

                <div className="buttons">
                    <Button variant="dark" value="sign-up" onClick={handleButton}>Sign Up</Button>
                    <Button variant="danger" value="login" onClick={handleButton}>Login</Button>
                </div>

                {buttonSelected === "sign-up" ? <SignUp /> : buttonSelected === "login" ? <Login /> : null}

            </section>
        </main>
    )
}