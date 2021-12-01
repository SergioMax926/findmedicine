import React, { useState } from "react";
import { css } from "@emotion/css";

import ImgSetaE from "assets/setaEsquerda.jpeg";
import ImgSetaD from "assets/setaDireita.jpeg";
import Img from "assets/logoProjetosemBG.png";

import { useHistory } from "react-router-dom";
import Input from "components/Input";
import Button from "components/Button";

import { cpfMask } from "utils/cpfMask";
import { telefoneMask } from "utils/telefoneMask";
import { useAuth } from "hooks/useAuth";

export default function TelaCadastro() {
  const { signUp } = useAuth();
  const history = useHistory();

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [style, setStyle] = useState(true);

  function OcultaTela() {
    setStyle(!style);
  }

  return (
    <div
      className={css`
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
        display: flex;
        font-size: 16px;
        background-color: #fcecec;
      `}
    >
      <div
        className={css`
          width: 800px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4em;


          border-radius: 1em;
          padding: 1em;

          @media only screen and (max-width: 600px) {
            flex-direction: column;
          }
        `}
      >
        <img
          src={Img}
          className={css`
            flex-shrink: 1;
            max-width: 300px;
            max-height: 300px;
            background-color: white;
            border-radius: 20px;

            @media only screen and (max-width: 600px) {
              max-width: 190px;
              max-height: 180px;
            }
          `}
        />

        {style ? (
          <div id="TelaCad1">
            <h1 className="textCadastro">Cadastro</h1>

            <Input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              type="text"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(cpfMask(e.target.value))}
              maxlength="14"
            />

            <Input
              type="text"
              placeholder="telefone ex: (DD) d dddd-dddd"
              value={telefone}
              onChange={(e) => setTelefone(telefoneMask(e.target.value))}
              maxlength="14"
            />

            <div
              className={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <Button onClick={() => history.push("/login")}>
                Voltar para Login
              </Button>

              <img
                src={ImgSetaD}
                className="ImgSetaDireita"
                onClick={OcultaTela}
              />
            </div>
          </div>
        ) : (
          <div id="TelaCad2">
            <h1 className="textCadastro">Cadastro</h1>
            <Input
              type="text"
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="DivLogin">
              <img
                src={ImgSetaE}
                className="SetaEsquerda"
                onClick={OcultaTela}
              />

              <Button
                onClick={() => {
                  signUp(name, cpf, telefone, email, password)
                    .then(() => {
                      history.push("/login");
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                }}
              >
                Salvar
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
