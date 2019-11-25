import React, { Component } from "react";
import api from "../../services/api";
import { Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class ViagemDetalhes extends Component {
  state = {
    viagem: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/deslocamento/${id}`);

    this.setState({ viagem: response.data });
  }

  render() {
    return (
      <div>
        <div className="componentes">
          <Header />
          <Accordion />
        </div>
        {/* <div className="navegar"></div>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="/main">
            Página Inicial
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            Viagens
          </BreadcrumbItem>
        </Breadcrumb> */}
        <section className="content table-responsive col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered">
            <tbody>
              {this.state.viagem.map(viagem => (
                <tr key={viagem.deslocamentoId}>
                  <tr>
                    <th>Id Deslocamento</th>
                    <td>{viagem.deslocamentoId}</td>
                  </tr>
                  <tr>
                    <th>Id Veículo</th>
                    <td>{viagem.veiculoId}</td>
                  </tr>
                  <tr>
                    <th>Id Motorista</th>
                    <td>{viagem.motoristaId}</td>
                  </tr>
                  <tr>
                    <th>Endereço de Viagem</th>
                    <td>{viagem.deslocamentoEndereco}</td>
                  </tr>
                  <tr>
                    <th>Rota de Viagem</th>
                    <td>{viagem.deslocamentoRota}</td>
                  </tr>
                  <tr>
                    <th>Gastos da Viagem</th>
                    <td>{viagem.deslocamentoGastos}</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th>Quilometragem</th>
                    <td>{viagem.deslocamentoQuilometragem}</td>
                  </tr>
                  <tr>
                    <th>Observação</th>
                    <td>{viagem.deslocamentoObs}</td>
                  </tr>
                  <tr>
                    <th>Acidentes</th>
                    <td>{viagem.deslocamentoAcidentes}</td>
                  </tr>
                  <tr>
                    <th>>Data Início Viagem</th>
                    <td>{viagem.deslocamentoDataInicio}</td>
                  </tr>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}
