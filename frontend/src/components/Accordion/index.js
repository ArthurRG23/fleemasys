import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import "./styles.css";

const Accordion = () => (
  <div className="sidebar">
    <Link className="active" to="/main">
      Página Inicial
    </Link>
    <Link to="/usuarios">Usuários</Link>
    <Link to="/motoristas">Motoristas</Link>
    <Link to="/clientes">Clientes</Link>
    <Link to="/veiculos">Veículos</Link>
    <Link to="/viagens">Viagens</Link>
    <Link to="/empresa">Empresa</Link>
    <Link to="#contact">Configurações</Link>
    <Link to="/">Sair</Link>
  </div>
);

export default Accordion;
