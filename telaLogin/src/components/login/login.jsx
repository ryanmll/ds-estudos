import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./login.css";


function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const submit = (event) => {
        event.preventDefault();

    }

    return (
        <div className="container">
            <form onSubmit={submit}>
            <h1 className="h1-form">
                Acesse o sistema
            </h1>
            <div className="div2-2">

                <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />  {/* capta o valor de um formulário com o react usando arrow function */}
                <FaUser className="icons"/>

            </div>

            <div className="div2-2" id="div2">

                <input type="password" placeholder="Password" onChange={(e) => setSenha(e.target.value)}/>
                <FaLock className="icons"/>

            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" id="checkbox" />
                    Lembre de mim
                </label>

                <div>
                    <a href="#">
                        Esqueceu a senha?
                    </a>
                </div>
            </div>

            <button id="btn-entrar">
                Entrar
            </button>

            <div className="singup">
                Não tem uma conta? <a href="#">Registre-se</a>
            </div>

            </form>
        </div>
    )
}

export default Login;