import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Title } from "../components/Title";

export function LoginAccont() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    let validateEmail = email;
    let validatePassword = password;
    console.log("validateEmail", validateEmail);
    console.log("validatePassword", validatePassword);
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <Title title={"Login"} />

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input input-password">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="text-right">
              <Link className="txt3" to="/ChangePassword">
                Trocar senha
              </Link>
            </div>

            <div className="container-login-form-btn ">
              <Link to="/" className="login-form-btn">
                Cadastrar
              </Link>
              <button className="login-form-btn btn-white">Logar</button>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={validate}>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
