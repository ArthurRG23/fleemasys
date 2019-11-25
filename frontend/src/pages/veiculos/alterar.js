import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";

export default class VeiculoAlterar extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      veiculo: {
        veiculoId: "",
        veiculoMarca: "",
        veiculoModelo: "",
        veiculoPlaca: "",
        veiculoCNPJCliente: "",
        veiculoCor: "",
        veiculoChassi: "",
        veiculoSinistro: "",
        veiculoApolice: "",
        veiculoSeguro: ""
      }
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/veiculos/${id}`);
      this.setState({ veiculo: response.data[0] });
    } catch (error) {
      console.log(error);
    }
  }

  submitHandler(e) {
    this.setState({
      veiculo: {
        [e.target.name]: e.target.value
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = this.state.veiculo;

    api
      .put("/veiculos/" + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push("/veiculos");

    window.location.reload();
  }

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
    } = this.state.veiculo;
    return (
      <Form id="formVeiculos" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="Marca">Marca</Label>
          <Input
            type="text"
            name="veiculoMarca"
            placeholder="Nome completo"
            value={veiculoMarca}
            onChange={this.submitHandler}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="Modelo">Modelo</Label>
          <Input
            type="text"
            name="veiculoModelo"
            placeholder="Modelo"
            value={veiculoModelo}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Placa">Placa</Label>
          <Input
            type="text"
            name="veiculoPlaca"
            placeholder="Placa"
            value={veiculoPlaca}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CNPJ Cliente">CNPJ Cliente</Label>
          <Input
            type="text"
            name="veiculoCNPJCliente"
            placeholder="CNPJ Cliente"
            value={veiculoCNPJCliente}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Cor">Cor</Label>
          <Input
            type="text"
            name="veiculoCor"
            placeholder="Cor"
            value={veiculoCor}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Chassi">Chassi</Label>
          <Input
            type="text"
            name="veiculoChassi"
            placeholder="Chassi"
            value={veiculoChassi}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Sinistro">Sinistro</Label>
          <Input
            type="text"
            name="veiculoSinistro"
            placeholder="Sinistro"
            value={veiculoSinistro}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Apolice">Apolice</Label>
          <Input
            type="text"
            name="veiculoApolice"
            placeholder="Apolice"
            value={veiculoApolice}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Seguro">Seguro</Label>
          <Input
            type="text"
            name="veiculoSeguro"
            placeholder="Seguro"
            value={veiculoSeguro}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <Button type="submit" color="warning">
          Salvar
        </Button>{" "}
      </Form>
    );
  }
}
