import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import Header from '../../components/Header';
// import Accordion from '../../components/Accordion';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default class VeiculoNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      veiculoMarca: "",
      veiculoModelo: "",
      veiculoPlaca: "",
      veiculoCNPJCliente: "",
      veiculoCor: "",
      veiculoChassi: "",
      veiculoSinistro: "",
      veiculoApolice: "",
      veiculoSeguro: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    try {
      e.preventDefault();
      console.log(this.state);
      api.post("/veiculos", this.state).then(res => console.log(res.data));

      this.props.history.push("/veiculos");

      window.location.reload();
    } catch {
      console.log("erro");
    }
  };

  render() {
    const {
      veiculoMarca,
      veiculoModelo,
      veiculoPlaca,
      veiculoCNPJCliente,
      veiculoCor,
      veiculoChassi,
      veiculoSinistro,
      veiculoApolice,
      veiculoSeguro
    } = this.state;
    return (
      <Form id="formVeiculos" onSubmit={this.submitHandler}>
        <FormGroup>
          <Label for="nome">Marca</Label>
          <Input
            type="text"
            name="veiculoMarca"
            placeholder="Nome completo"
            value={veiculoMarca}
            onChange={this.changeHandler}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="nome">Modelo</Label>
          <Input
            type="text"
            name="veiculoModelo"
            placeholder="Modelo"
            value={veiculoModelo}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nome">Placa</Label>
          <Input
            type="text"
            name="veiculoPlaca"
            placeholder="Placa"
            value={veiculoPlaca}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nome">CNPJ Cliente</Label>
          <Input
            type="text"
            name="veiculoCNPJCliente"
            placeholder="CNPJ Cliente"
            value={veiculoCNPJCliente}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nome">Cor</Label>
          <Input
            type="text"
            name="veiculoCor"
            placeholder="Cor"
            value={veiculoCor}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nome">Chassi</Label>
          <Input
            type="text"
            name="veiculoChassi"
            placeholder="Chassi"
            value={veiculoChassi}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nome">Sinistro</Label>
          <Input
            type="text"
            name="veiculoSinistro"
            placeholder="Sinistro"
            value={veiculoSinistro}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nome">Apolice</Label>
          <Input
            type="text"
            name="veiculoApolice"
            placeholder="Apolice"
            value={veiculoApolice}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nome">Seguro</Label>
          <Input
            type="text"
            name="veiculoSeguro"
            placeholder="Seguro"
            value={veiculoSeguro}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <Button type="submit" color="warning">
          Adicionar
        </Button>{" "}
        <a href="javascript:window.history.go(-1);" class="btn btn-danger">
          <span class="glyphicon glyphicon-remove"></span> Cancelar
        </a>
      </Form>
    );
  }
}
