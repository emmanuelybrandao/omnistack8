import React from "react"; //importe o react em todos os componentes
import './Login.css';
import logo from '../assets/logo.png';


export default function Login() {
    return (
        <div className="login-container">
            <form>
                <img src= {logo} alt="Tindev" />
                <input placeholder="Digite seu usuário do GitHub"/>
                <button type="submit"> Enviar</button>
            </form>
        </div>
    );

}