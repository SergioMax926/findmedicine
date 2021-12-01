  import React, { useState } from "react";
import { css } from "@emotion/css";

import Img from "assets/logoProjetosemBG.png";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

import Input from "components/Input";
import Button from "components/Button";

import "../Telas.css";

export default function TelaLogin() {
  const history = useHistory();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className={css`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fcecec;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;

          background-color: white;

          border-radius: 16px;
          padding: 24px;
          margin: 90px;
          box-shadow: 0px 1px 0px;
        `}
      >
        <div
          className={css`
            flex-shrink: 1;
            max-width: 400px;
            max-height: 300px;

            margin-right: 30px;
            border-right: 1px solid black;
          `}
        >
          <img
            src={Img}
            className={css`
              width: 85%;
              height: 85%;
            `}
          />
        </div>

        <div
          className={css`
            display: flex;
            flex-direction: column;
            gap: 16px;
            text-align: center;

            margin-left: 30px;
            height: 70%;
            width: 80%;
          `}
        >
          <h1
            className={css`
              font-family: Cambria, Cochin, Georgia, Times, "Times New Roman",
                serif, "Lucida Sans", Arial, sans-serif;
              font-size: 60px;
            `}
          >
            Login
          </h1>

          <Input
            type="text"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div
            className={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            `}
          >
            <Button
              onClick={() => {
                signIn(email, password)
                  .then(() => {
                    history.push("/");
                  })
                  .catch((e) => {
                    console.error(e);
                  });
              }}
            >
              Entrar
            </Button>

            <Button onClick={() => history.push("/cadastro")}>Cadastrar</Button>

            <div className="LoginGoogle">
              <button
                type="button"
                class="login-with-google-btn"
                onClick={() => {
                  const provider = new GoogleAuthProvider();
                  const auth = getAuth();
                  signInWithPopup(auth, provider)
                    .then((result) => {
                      history.push("/homeAdmin");
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
