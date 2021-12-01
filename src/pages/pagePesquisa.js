import Button from "components/Button";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { useHistory } from "react-router";

import Img from "../assets/Find Medicine.jpg";
import ImgLogo from "assets/Find Medicine.png";
import ImgMenu from "assets/menu.png";
import ImgLocation from "assets/location.png";
import ImgFeedback from "assets/feedback.png";
import Imgconsulta from "assets/conversacao.png";
import Imgsobre from "assets/sobre.png";

export default function PagePesquisa() {
  const history = useHistory();

  function openNav() {
    document.getElementById("mySidenav").style.width = "28%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
  }

  return (
    <div id="main">
      <div className="TelaInicio">
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
                src={ImgLocation}
              ></img>
              <a>Pesquisar UBS/Medicamento</a>
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
              <a onClick={() => history.push("/homeAdmin")}>
                Entrar na área do administrador
              </a>
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

        <h1
          className={css`
            text-align: center;
            font-family: Cambria, Cochin, Georgia, Times, "Times New Roman",
              serif;
            margin-top: 30px;
          `}
        >
          Área do Usuário
        </h1>

        <div className="Tela">
          <div className="TelaImgLogo">
            <img className="ImgLogoTelaUsu" src={Img}></img>
          </div>
             
            </div>
          </div>
        </div>
  );
}
