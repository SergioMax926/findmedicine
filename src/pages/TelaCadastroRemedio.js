import React, { useState } from "react";
import { css } from "@emotion/css";

import { useHistory } from "react-router-dom";
import Input from "components/Input";
import Button from "components/Button";
import Textarea from "components/Textarea";

import Img from "../assets/Find Medicine.jpg";
import ImgLogo from "assets/Find Medicine.png";
import ImgMenu from "assets/menu.png";
import ImgLocation from "assets/location.png";
import ImgAddUser from "assets/add-user.png";
import ImgPharmacy from "assets/pharmacy.png";
import ImgMedicine from "assets/medicine.png";
import ImgFeedback from "assets/feedback.png";
import Imgconsulta from "assets/conversacao.png";
import Imgsobre from "assets/sobre.png";
import { useMedice } from "hooks/useMedice";

export default function TelaCadastroRemedio() {
  const { createMedicine } = useMedice();

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  function openNav() {
    document.getElementById("mySidenav").style.width = "28%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
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
              src={ImgPharmacy}
              onClick={() => {
                history.push("/registroUBS");
              }}
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
              src={ImgMedicine}
            ></img>
            <a>Adicionar Medicamento</a>
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
              onClick={() => {
                history.push("/Feedback");
              }}
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
            margin: auto;

            border-radius: 1em;
            padding: 1em;

            @media only screen and (max-width: 600px) {
              flex-direction: column;
            }
          `}
        >
          <img
            src={ImgMedicine}
            className={css`
              flex-shrink: 1;
              max-width: 300px;
              max-height: 300px;
              background-color: white;
              border-radius: 20px;
              padding: 20px;

              @media only screen and (max-width: 600px) {
                max-width: 190px;
                max-height: 180px;
              }
            `}
          />

          <div id="TelaCad1">
            <h1>Cadastro de Medicamento</h1>

            <Input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              type="text"
              placeholder="Código"
              maxlength="14"
              value={code}
              onChange={(e) => setCode(e.target.value)}
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
              <Button onClick={() => history.push("/homeAdmin")}>Voltar</Button>

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
    </div>
  );
}
