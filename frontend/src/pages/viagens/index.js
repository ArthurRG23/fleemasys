import React, { Component } from "react";
import api from "../../services/api"; //Importando api do backend
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Viagens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viagens: []
    };
  }

  componentDidMount() {
    this.loadViagens();
  }

  loadViagens = async () => {
    const response = await api.get("/deslocamento");

    this.setState({ viagens: response.data });
  };

  deleteViagem() {
    try {
      console.log(this.deslocamentoId);
      api.delete(`/deslocamento/${this.deslocamentoId}`);
    } catch (error) {
      console.log(error);
    }
    // window.location.reload();
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
                Viagens
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Link to="/viagens/novo">
            <Button color="success">Novo</Button>
          </Link>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Id Veículo</th>
                <th>Id Motorista</th>
                <th>Endereço de Viagem</th>
                <th>Rota de Viagem</th>
                <th>Data Início Viagem</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.viagens.map(Viagem => (
                <tr key={Viagem.deslocamentoId}>
                  <td>{Viagem.deslocamentoId}</td>
                  <td>{Viagem.veiculoId}</td>
                  <td>{Viagem.motoristaId}</td>
                  <td>{Viagem.deslocamentoEndereco}</td>
                  <td>{Viagem.deslocamentoRota}</td>
                  <td>{Viagem.deslocamentoDataInicio}</td>
                  <td align="center">
                    <Link to={`/viagens/${Viagem.deslocamentoId}`}>
                      <Button color="primary">Detalhes</Button>
                    </Link>
                    <Link to={`/viagens/alterar/${Viagem.deslocamentoId}`}>
                      <Button color="warning">Alterar</Button>
                    </Link>
                    <Button
                      color="danger"
                      deslocamentoId={Viagem.deslocamentoId}
                      onClick={this.deleteViagem}
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
