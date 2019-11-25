import React, { Component } from "react";
import api from "../../services/api"; //Importando api do backend
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Clientes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientes: []
    };
  }

  componentDidMount() {
    this.loadClientes();
  }

  loadClientes = async () => {
    const response = await api.get("/clientes");

    this.setState({ clientes: response.data });
  };

  deleteCliente() {
    try {
      console.log(this.clienteid);
      api.delete(`/clientes/${this.clienteid}`);
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
                Clientes
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Link to="/clientes/novo">
            <Button color="success">Novo</Button>
          </Link>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Razão Social</th>
                <th>Nome Fantasia</th>
                <th>CNPJ</th>
                <th>Telefone Comercial</th>
                <th>Situação</th>

                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.clientes.map(cliente => (
                <tr key={cliente.clienteId}>
                  <td>{cliente.clienteId}</td>
                  <td>{cliente.clienteRazaoSocial}</td>
                  <td>{cliente.clienteNMFantasia}</td>
                  <td>{cliente.clienteCNPJ}</td>
                  <td>{cliente.clienteTelComercial}</td>
                  <td>{cliente.clienteSituacao}</td>
                  <td align="center">
                    <Link to={`/clientes/${cliente.clienteId}`}>
                      <Button color="primary">Detalhes</Button>
                    </Link>
                    <Link to={`/clientes/alterar/${cliente.clienteId}`}>
                      <Button color="warning">Alterar</Button>
                    </Link>
                    <Button
                      color="danger"
                      clienteid={cliente.clienteId}
                      onClick={this.deleteCliente}
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
