import React, { Component } from "react";
import api from "../../services/api"; //Importando api do backend
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Usuarios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuarios: []
    };
  }

  componentDidMount() {
    this.loadUsuarios();
  }

  loadUsuarios = async () => {
    const response = await api.get("/usuarios");

    this.setState({ usuarios: response.data });
  };

  deleteUsuario() {
    try {
      console.log(this.usuarioid);
      api.delete(`/usuarios/${this.usuarioid}`);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  }

  render() {
    return (
      <div>
        <div className="componentes">
          <Header />
          <Accordion />
        </div>

        <section className="content">
          <div className="navegar">
            <Breadcrumb tag="nav" listTag="div">
              <BreadcrumbItem tag="a" href="/main">
                Página Inicial
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">
                Usuários
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Link to="/usuarios/novo">
            <Button color="success">Novo</Button>
          </Link>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Login</th>
                <th>Tipo</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.usuarios.map(usuario => (
                <tr key={usuario.usuarioId}>
                  <td>{usuario.usuarioId}</td>
                  <td>{usuario.usuarioNome}</td>
                  <td>{usuario.usuarioLogin}</td>
                  <td>{usuario.usuarioTipo}</td>
                  <td align="center">
                    <Link to={`/usuarios/${usuario.usuarioId}`}>
                      <Button color="primary">Detalhes</Button>
                    </Link>
                    <Link to={`/usuarios/alterar/${usuario.usuarioId}`}>
                      <Button color="warning">Alterar</Button>
                    </Link>
                    <Button
                      color="danger"
                      usuarioid={usuario.usuarioId}
                      onClick={this.deleteUsuario}
                    >
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </div>
    );
  }
}
