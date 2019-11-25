import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";

export default class ViagemAlterar extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      viagem: {
        veiculoId: "",
        motoristaId: "",
        deslocamentoRota: "",
        deslocamentoEndereco: "",
        deslocamentoGastos: "",
        deslocamentoQuilometragem: "",
        deslocamentoObs: "",
        deslocamentoAcidentes: ""
        // deslocamentoDataInicio: ""
      }
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/deslocamento/${id}`);
      this.setState({ viagem: response.data[0] });
    } catch (error) {
      console.log(error);
    }
  }

  submitHandler(e) {
    this.setState({
      viagem: {
        [e.target.name]: e.target.value
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = this.state.viagem;

    api
      .put("/deslocamento/" + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push("/viagens");

    window.location.reload();
  }

  render() {
    const {
      veiculoId,
      motoristaId,
      deslocamentoRota,
      deslocamentoEndereco,
      deslocamentoGastos,
      deslocamentoQuilometragem,
      deslocamentoObs,
      deslocamentoAcidentes
      // deslocamentoDataInicio
    } = this.state.viagem;
    return (
      <Form id="formViagens" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="Veículo Id">Id Veículo</Label>
          <Input
            type="text"
            name="veiculoId"
            placeholder="Id Veículo"
            value={veiculoId}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="viagem">Id Motorista</Label>
          <Input
            type="text"
            name="motoristaId"
            placeholder="Id Motorista"
            value={motoristaId}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nome">Endereço de Viagem</Label>
          <Input
            type="text"
            name="deslocamentoEndereco"
            placeholder="Viagem Endereço"
            value={deslocamentoEndereco}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contato">Rota de Viagem</Label>
          <Input
            type="text"
            name="deslocamentoRota"
            placeholder="Rota de Viagem"
            value={deslocamentoRota}
            onChange={this.submitHandler}
          />
          <FormGroup>
            <Label for="Gastos da Viagem">Gastos da Viagem</Label>
            <Input
              type="text"
              name="deslocamentoGastos"
              placeholder="Gastos da Viagem"
              value={deslocamentoGastos}
              onChange={this.submitHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Quilometragem">Quilometragem</Label>
            <Input
              type="text"
              name="deslocamentoQuilometragem"
              placeholder="Quilometragem"
              value={deslocamentoQuilometragem}
              onChange={this.submitHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Observação">Observação</Label>
            <Input
              type="text"
              name="deslocamentoObs"
              placeholder="Observação"
              value={deslocamentoObs}
              onChange={this.submitHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Acidentes">Acidentes</Label>
            <Input
              type="text"
              name="deslocamentoAcidentes"
              placeholder="Acidentes"
              value={deslocamentoAcidentes}
              onChange={this.submitHandler}
            />
          </FormGroup>
        </FormGroup>
        {/* <FormGroup>
          <Label for="contato">Data Início Viagem</Label> */}
        {/* <Input
            type="text"
            name="deslocamentoDataInicio"
            placeholder="Data Início Viagem"
            value={deslocamentoDataInicio}
            onChange={this.submitHandler}
          />
        </FormGroup> */}
        <Button type="submit" color="warning">
          Salvar
        </Button>{" "}
      </Form>
    );
  }
}
