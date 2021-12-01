import React, { useState } from "react";
import { css } from "@emotion/css";

import ImgSetaE from "assets/setaEsquerda.jpeg";
import ImgSetaD from "assets/setaDireita.jpeg";
import Img from "assets/logoProjetosemBG.png";

import { useHistory } from "react-router-dom";
import Input from "components/Input";
import Button from "components/Button";

import ImgLogo from "assets/Find Medicine.png";
import ImgMenu from "assets/menu.png";
import ImgLocation from "assets/location.png";
import ImgAddUser from "assets/add-user.png";
import ImgPharmacy from "assets/pharmacy.png";
import ImgMedicine from "assets/medicine.png";
import ImgFeedback from "assets/feedback.png";
import Imgconsulta from "assets/conversacao.png";
import Imgsobre from "assets/sobre.png";

import { cpfMask } from "utils/cpfMask";
import { telefoneMask } from "utils/telefoneMask";
import { useAuth } from "hooks/useAuth";

export default function TelaCadastro() {
  const { signUp } = useAuth();
  const history = useHistory();

  function openNav() {
    document.getElementById("mySidenav").style.width = "28%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
  }

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
        font-size: 16px;
        background-color: #fcecec;
      `}
    >
      {/* Inicio da Nav */}
      <div className="Navdiv">
        <div id="mySidenav" class="sidenav">
          <a
            href="javascript:void(0)"
            class="closebtn"
            onClick={() => {
              closeNav();
            }}
          >
            &times;
          </a>

          <div className="divIcontext">
            <img
              className={css`
                width: 40px;
                height: 40px;
                margin-left: 10px;
                margin-top: 15px;
                cursor: pointer;
              `}
              src={ImgAddUser}
            ></img>
            <a
              onClick={() => {
                history.push("/cadastroUser");
              }}
            >
              Adicionar Funcionário
            </a>
          </div>

          <div className="divIcontext">
            <img
              className="btNav"
              onClick={() => {
                history.push("/registroUBS");
              }}
              src={ImgPharmacy}
            ></img>
            <a
              onClick={() => {
                history.push("/registroUBS");
              }}
            >
              Adicionar UBS
            </a>
          </div>

          <div className="divIcontext">
            <img
              className={css`
                width: 40px;
                height: 40px;
                margin-left: 10px;
                margin-top: 15px;
                cursor: pointer;
              `}
              onClick={() => {
                history.push("/registroMedicine");
              }}
              src={ImgMedicine}
            ></img>
            <a
              onClick={() => {
                history.push("/registroMedicine");
              }}
            >
              Adicionar Medicamento
            </a>
          </div>

          <div className="divIcontext">
            <img
              className={css`
                width: 40px;
                height: 40px;
                margin-left: 10px;
                margin-top: 15px;
                cursor: pointer;
              `}
              src={ImgLocation}
            ></img>
            <a>Pesquisar UBS/Medicamento</a>
          </div>

          <div className="divIcontext">
            <img className="btNav" src={Imgconsulta}></img>
            <a>Fazer consulta</a>
          </div>

          <div className="divIcontext">
            <img
              className={css`
                width: 40px;
                height: 40px;
                margin-left: 10px;
                cursor: pointer;
              `}
              onClick={() => {
                history.push("/Feedback");
              }}
              src={ImgFeedback}
            ></img>
            <a
              onClick={() => {
                history.push("/Feedback");
              }}
            >
              Feedback
            </a>
          </div>

          <div className="divIcontext">
            <img className="btNav" src={Imgsobre}></img>
            <a>Sobre o projeto</a>
          </div>
        </div>

        <img
          src={ImgMenu}
          className="btMenu"
          onClick={() => {
            openNav();
          }}
        />

        <h1 className="textMenu">Find Medicine</h1>

        <img src={ImgLogo} className="logoFind" />
      </div>
      {/* Fim da Nav */}

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
            src={ImgAddUser}
            className={css`
              flex-shrink: 1;
              max-width: 250px;
              max-height: 250px;
              background-color: white;
              border-radius: 20px;
              padding: 20px;

              @media only screen and (max-width: 600px) {
                max-width: 140px;
                max-height: 130px;
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
                <Button onClick={() => history.push("/homeAdmin")}>
                  Voltar
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
    </div>
  );
}
