import "./loginSignUp.css"

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import { Login } from "./login-signUp/login";
import { SignUp } from "./login-signUp/signUp";

import { useState } from "react";

export function LoginSignUp() {
    const [buttonSelected, setfButtonSelected] = useState(null)

    function handleButton(e) {
        const clickValue = e.target.value
        setfButtonSelected(clickValue)
    }

    return (
        <main>
            <img src="/images/pikachu.png" alt="Pikachu standing with a thinking look " className="backgroundImage" />
            <section>
                <div className="logo-h1">
                    <img src="/images/pokemon.png" alt="" />
                    <h1>NFT</h1>
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