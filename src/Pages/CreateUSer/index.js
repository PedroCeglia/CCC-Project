import React from "react";
import "./style.css"

// Import React ROuter DOm
import { useNavigate } from "react-router-dom";

// Import Widgets
import Header from '../Widgets/Header'

export default function CreateUser(){

    // Get Use Navigate
    const navigate = useNavigate();

    const itensList = [{
        nome:"voltar",
        function:()=>{
            navigate("/")
        }
    }]

    return(
        <div className="login-container">
            <Header itensList = {itensList}/>
            <section>
                <img src="assets/ccc-image-9.png" alt="image 9"/>
                <article className="login-area">
                    <h2>Login</h2>
                    <input placeholder="Name :" type="text"/>
                    <input placeholder="E-mail :" type="email"/>
                    <input placeholder="Password :" type="password"/>
                    <button>Entrar</button>
                </article>
            </section>
        </div>
    )
}