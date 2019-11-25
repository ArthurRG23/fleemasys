import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";
import Veiculos from "./pages/veiculos";
import VeiculoNovo from "./pages/veiculos/novo";
import VeiculoDetalhes from "./pages/veiculos/detalhes";
import VeiculoAlterar from "./pages/veiculos/alterar";
import Usuarios from "./pages/usuarios";
import UsuarioNovo from "./pages/usuarios/novo";
import UsuarioDetalhes from "./pages/usuarios/detalhes";
import UsuarioAlterar from "./pages/usuarios/alterar";
import Clientes from "./pages/clientes";
import ClienteNovo from "./pages/clientes/novo";
import ClienteDetalhes from "./pages/clientes/detalhes";
import ClienteAlterar from "./pages/clientes/alterar";
import Empresa from "./pages/empresa";
import EmpresaNovo from "./pages/empresa/novo";
import EmpresaDetalhes from "./pages/empresa/detalhes";
import EmpresaAlterar from "./pages/empresa/alterar";
import Viagens from "./pages/viagens";
import ViagemNovo from "./pages/viagens/novo";
import ViagemDetalhes from "./pages/viagens/detalhes";
import ViagemAlterar from "./pages/viagens/alterar";
import Motoristas from "./pages/motoristas";
import MotoristaDetalhes from "./pages/motoristas/detalhes";
import MotoristaNovo from "./pages/motoristas/novo";
import MotoristaAlterar from "./pages/motoristas/alterar";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/main" component={Main} />
      <Route exact path="/usuarios" component={Usuarios} />
      <Route path="/usuarios/:id" component={UsuarioDetalhes} />
      <Route exact path="/usuarios/novo" component={UsuarioNovo} />
      <Route exact path="/usuarios/alterar/:id" component={UsuarioAlterar} />
      <Route exact path="/motoristas" component={Motoristas} />
      <Route path="/motoristas/:id" component={MotoristaDetalhes} />
      <Route exact path="/motoristas/novo" component={MotoristaNovo} />
      <Route
        exact
        path="/motoristas/alterar/:id"
        component={MotoristaAlterar}
      />
      <Route exact path="/clientes" component={Clientes} />
      <Route path="/clientes/:id" component={ClienteDetalhes} />
      <Route exact path="/clientes/novo" component={ClienteNovo} />
      <Route exact path="/clientes/alterar/:id" component={ClienteAlterar} />
      <Route exact path="/veiculos" component={Veiculos} />
      <Route path="/veiculos/:id" component={VeiculoDetalhes} />
      <Route exact path="/veiculos/novo" component={VeiculoNovo} />
      <Route exact path="/veiculos/alterar/:id" component={VeiculoAlterar} />
      <Route exact path="/empresa" component={Empresa} />
      <Route path="/empresa/:id" component={EmpresaDetalhes} />
      <Route exact path="/empresa/novo" component={EmpresaNovo} />
      <Route exact path="/empresa/alterar/:id" component={EmpresaAlterar} />
      <Route exact path="/viagens" component={Viagens} />
      <Route path="/viagens/:id" component={ViagemDetalhes} />
      <Route exact path="/viagens/novo" component={ViagemNovo} />
      <Route exact path="/viagens/alterar/:id" component={ViagemAlterar} />
    </BrowserRouter>
  );
}
