import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Title } from "../components/Title";

export function ChangePassword() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <Title title={"Trocar senha"} />

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Repetir senha"
              ></span>
            </div>

            <div className="wrap-input">
              <input
                className={newPassword !== "" ? "has-val input" : "input"}
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Nova senha"
              ></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Salvar</button>
            </div>

            <div className="text-center">
              <span className="txt1">Deseja Logar?</span>
              <Link className="txt2" to="/LoginAccont">
                Clique aqui!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
