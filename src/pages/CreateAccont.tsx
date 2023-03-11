import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Title } from "../components/Title";

export function CreateAccont() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const validatePassword = () => {
    if (email === "") {
      return alert("Digite seu email");
    }
    if (password === confirmedPassword) {
      alert("Conta criada com sucesso!");
    } else {
      alert("Senha inválida");
    }
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <Title title={"Criar Conta"} />

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="wrap-input">
              <input
                className={confirmedPassword !== "" ? "has-val input" : "input"}
                type="password"
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Confirme a senha"
              ></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn btn-white">Cadastrar</button>
              <Link to="/LoginAccont" className="login-form-btn">
                Logar
              </Link>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={validatePassword}>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
