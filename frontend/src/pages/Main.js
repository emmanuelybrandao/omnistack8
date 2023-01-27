import React from "react";
import './Login.css';
import logo from '../assets/logo.png';

export default function Main () {
    return (
        <div className="login-container">
            <form>
                <img src= {logo} alt="Tindev" />
                <input placeholder="Digite seu usuário do GitHub"/>
                <button type="submit"> Enviar</button>
            </form>
        </div>
    )

}