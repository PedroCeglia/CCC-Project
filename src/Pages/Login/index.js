import React from "react";
import "./style.css"

// Import React Router Dom
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <div className="login-container">
            <header className='isntLog'>
                <Link to="/"><img src="assets/ccc-logo.png" alt="logo-image"/></Link>
                <nav className='isntLog'>
                    <Link to="/">Voltar</Link>
                </nav>
            </header>
            <section>
                <img src="assets/ccc-image-9.png" alt="image 9"/>
                <article className="login-area">
                    <h2>Login</h2>
                    <input placeholder="E-mail" type="email"/>
                    <input placeholder="Password" type="password"/>
                    <button>Entrar</button>
                </article>
            </section>
        </div>
    )
}