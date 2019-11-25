import React, { Component } from "react";
import api from "../../services/api"; //Importando api do backend
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Veiculos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      veiculos: []
    };
  }

  componentDidMount() {
    this.loadVeiculos();
  }

  loadVeiculos = async () => {
    const response = await api.get("/veiculos");

    this.setState({ veiculos: response.data });
  };

  deleteVeiculo() {
    try {
      console.log(this.veiculoid);
      api.delete(`/veiculos/${this.veiculoid}`);
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
                Veiculos
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Link to="/veiculos/novo">
            <Button color="success">Novo</Button>
          </Link>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Cor</th>
                <th>Placa</th>
                <th>CNPJ do Cliente</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.veiculos.map(veiculo => (
                <tr key={veiculo.veiculoId}>
                  <td>{veiculo.veiculoId}</td>
                  <td>{veiculo.veiculoMarca}</td>
                  <td>{veiculo.veiculoModelo}</td>
                  <td>{veiculo.veiculoCor}</td>
                  <td>{veiculo.veiculoPlaca}</td>
                  <td>{veiculo.veiculoCNPJCliente}</td>
                  <td align="center">
                    <Link to={`/veiculos/${veiculo.veiculoId}`}>
                      <Button color="primary">Detalhes</Button>
                    </Link>
                    <Link to={`/veiculos/alterar/${veiculo.veiculoId}`}>
                      <Button color="warning">Alterar</Button>
                    </Link>
                    <Button
                      color="danger"
                      veiculoid={veiculo.veiculoId}
                      onClick={this.deleteVeiculo}
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
