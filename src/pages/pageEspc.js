import React, { useState } from "react";
import { css } from "@emotion/css";
import ImgClinic from "assets/clinica.png";
import { useHistory } from "react-router-dom";

import { db } from "services/firebase";

import ImgLogo from "assets/Find Medicine.png";
import ImgMenu from "assets/menu.png";
import ImgLocation from "assets/location.png";
import ImgAddUser from "assets/add-user.png";
import ImgPharmacy from "assets/pharmacy.png";
import ImgMedicine from "assets/medicine.png";
import ImgFeedback from "assets/feedback.png";
import Imgconsulta from "assets/conversacao.png";
import Imgsobre from "assets/sobre.png";

import Input from "components/Input";
import Button from "components/Button";
import "../Telas.css";

export default function PageEspc() {
  const history = useHistory();
  const [cep, setCep] = useState("");


  function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
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
            margin: auto;
            width: 750px;
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
          <div
            className={css`
              max-width: 400px;
              max-height: 300px;

              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <img
              src={ImgClinic}
              className={css`
                max-width: 250px;
                max-height: 250px;
                background-color: white;
                border-radius: 20px;
                padding: 20px;

                @media only screen and (max-width: 600px) {
                  max-width: 200px;
                  max-height: 200px;
                }
              `}
            />
          </div>

          <div id="TelaCad1">
            <Input
              type="text"
              placeholder="Digite o CEP da UBS"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />

            <div
              className={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <Button
                onClick={() => {
                  history.push("/homeAdmin");
                }}
              >
                voltar
              </Button>

              <Button
                onClick={() => {
                  db.collection("UBS")
                    .doc(cep)
                    .get()
                    .then(() => {
                        
                      history.push("/registroMedicine");
                    })
                    .catch((e) => {
                      alert("UBS não cadastrada");
                    });
                }}
              >
                Entrar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
