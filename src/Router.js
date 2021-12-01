import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import TelaLogin from "pages/TelaLogin";
import { useAuth } from "hooks/useAuth";

import PagePesquisa from "pages/pagePesquisa";
import feedBack  from "hooks/feedback";
import TelaCadastro from "pages/TelaCadastro";
import CadMedicine from "pages/TelaCadastroRemedio";
import TelaUBS from "pages/TelaCadastroUbs";
import AreaUsu from "pages/AreUsu";
import AreaAdmin from "pages/AreaAdmin";
import CadUser from "pages/CadastroUser";
import PageEspc from "pages/pageEspc";

export default function Router() {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) return null;

  if (currentUser === null) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" children={<TelaLogin />} />
          <Route exact path="/cadastro" children={<TelaCadastro />} />
          <Redirect path="/" to="/login" />
        </Switch>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" children={<AreaUsu />} />
        <Route exact path="/login" children={<TelaLogin />} />
        <Route exact path="/cadastro" children={<TelaCadastro />} />
        <Route exact path="/registroMedicine" children={<CadMedicine />} />
        <Route exact path="/registroUBS" children={<TelaUBS />} />
        <Route exact path="/homeAdmin" children={<AreaAdmin/>} />
        <Route exact path="/cadastroUser" children={<CadUser />} />
        <Route exact path="/Feedback" children={<feedBack />} />
        <Route exact path="/pagePesquisar" children={ <PagePesquisa /> } />
        <Route exact path="/espcMed" children={ <PageEspc /> } />

        <Redirect path="/" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
