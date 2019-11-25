import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import Header from '../../components/Header';
// import Accordion from '../../components/Accordion';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default class ViagemNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      veiculoId: "",
      motoristaId: "",
      deslocamentoRota: "",
      deslocamentoEndereco: "",
      deslocamentoGastos: "",
      deslocamentoQuilometragem: "",
      deslocamentoObs: "",
      deslocamentoAcidentes: ""
      // deslocamentoDataInicio: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    try {
      e.preventDefault();
      console.log(this.state);
      api.post("/deslocamento", this.state).then(res => console.log(res.data));

      this.props.history.push("/viagens");

      window.location.reload();
    } catch {
      console.log("erro");
    }
  };

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
    } = this.state;
    return (
      <Form id="formViagens" onSubmit={this.submitHandler}>
        <FormGroup>
          <Label for="Veículo Id">Id Veículo</Label>
          <Input
            type="text"
            name="veiculoId"
            placeholder="Id Veículo"
            value={veiculoId}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="viagem">Id Motorista</Label>
          <Input
            type="text"
            name="motoristaId"
            placeholder="Id Motorista"
            value={motoristaId}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nome">Endereço de Viagem</Label>
          <Input
            type="text"
            name="deslocamentoEndereco"
            placeholder="Viagem Endereço"
            value={deslocamentoEndereco}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contato">Rota de Viagem</Label>
          <Input
            type="text"
            name="deslocamentoRota"
            placeholder="Rota de Viagem"
            value={deslocamentoRota}
            onChange={this.changeHandler}
          />
          <FormGroup>
            <Label for="Gastos da Viagem">Gastos da Viagem</Label>
            <Input
              type="text"
              name="deslocamentoGastos"
              placeholder="Gastos da Viagem"
              value={deslocamentoGastos}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Quilometragem">Quilometragem</Label>
            <Input
              type="text"
              name="deslocamentoQuilometragem"
              placeholder="Quilometragem"
              value={deslocamentoQuilometragem}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Observação">Observação</Label>
            <Input
              type="text"
              name="deslocamentoObs"
              placeholder="Observação"
              value={deslocamentoObs}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Acidentes">Acidentes</Label>
            <Input
              type="text"
              name="deslocamentoAcidentes"
              placeholder="Acidentes"
              value={deslocamentoAcidentes}
              onChange={this.changeHandler}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="contato">Data Início Viagem</Label>
          {/* <Input
            type="text"
            name="deslocamentoDataInicio"
            placeholder="Data Início Viagem"
            value={deslocamentoDataInicio}
            onChange={this.changeHandler}
          /> */}
        </FormGroup>
        <Button type="submit" color="warning">
          Adicionar
        </Button>{" "}
      </Form>
    );
  }
}
