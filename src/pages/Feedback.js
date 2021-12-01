import React, { useState } from "react";
import { css } from "@emotion/css";

import { useHistory } from "react-router-dom";
import Input from "components/Input";
import Button from "components/Button";
import Textarea from "components/Textarea";

import ImgFeed from "assets/feedback.png";

import { useMedice } from "hooks/useMedice";

export default function TelaCadastroRemedio() {
  const { createMedicine } = useMedice();

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

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
                history.push("/cadastro");
              }}
            >
              Adicionar Funcionário
            </a>
          </div>

          <div className="divIcontext">
            <img className="btNav" src={ImgPharmacy}></img>
            <a>Adicionar UBS</a>
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
              src={ImgMedicine}
            ></img>
            <a  onClick>Adicionar Medicamento</a>
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
              src={ImgFeedback}
            ></img>
            <a>Feedback</a>
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
          width: 800px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4em;

          background-color: white;

          border-radius: 1em;
          padding: 1em;

          @media only screen and (max-width: 600px) {
            flex-direction: column;
          }
        `}
      >
        <img
          src={ImgFeed}
          className={css`
            flex-shrink: 1;
            max-width: 300px;
            max-height: 300px;
            @media only screen and (max-width: 600px) {
              max-width: 190px;
              max-height: 180px;
            }
          `}
        />

        <div id="TelaCad1">
          <h1>FeedBack</h1>

          <Input
            type="text"
            placeholder="Digite seu cpf"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Textarea
            type="text"
            placeholder="Descrição"
            maxlength="14"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div
            className={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <Button onClick={() => history.push("/")}>Voltar</Button>

            <Button
              onClick={() => {
                createMedicine(name, code, description)
                  .then(() => {
                    history.push("/");
                  })
                  .catch((e) => {
                    alert("Dados incompletos");
                  });
              }}
            >
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
