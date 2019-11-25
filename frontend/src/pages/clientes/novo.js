import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import Header from '../../components/Header';
// import Accordion from '../../components/Accordion';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default class ClienteNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clienteRazaoSocial: "",
      clienteNMFantasia: "",
      clienteCNPJ: "",
      clienteTelComercial: "",
      clienteTelCelular: "",
      clienteEmail: "",
      clienteCep: "",
      clienteLogradouro: "",
      clienteNumero: "",
      clienteComplemento: "",
      clienteBairro: "",
      clienteCidade: "",
      clienteUF: "",
      clienteSituacao: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    try {
      e.preventDefault();
      console.log(this.state);
      api.post("/clientes", this.state).then(res => console.log(res.data));

      this.props.history.push("/clientes");

      window.location.reload();
    } catch {
      console.log("erro");
    }
  };

  render() {
    const {
      clienteRazaoSocial,
      clienteNMFantasia,
      clienteCNPJ,
      clienteTelComercial,
      clienteTelCelular,
      clienteEmail,
      clienteCep,
      clienteLogradouro,
      clienteNumero,
      clienteComplemento,
      clienteBairro,
      clienteCidade,
      clienteUF,
      clienteSituacao
    } = this.state;
    return (
      <Form id="formClientes" onSubmit={this.submitHandler}>
        <FormGroup>
          <Label for="Razão Social">Razão Social</Label>
          <Input
            type="text"
            name="clienteRazaoSocial"
            placeholder="Razão Social"
            value={clienteRazaoSocial}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Nome Fantasia">Nome Fantasia</Label>
          <Input
            type="text"
            name="clienteNMFantasia"
            placeholder="Nome Fantasia"
            value={clienteNMFantasia}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CNPJ">CNPJ</Label>
          <Input
            type="text"
            name="clienteCNPJ"
            placeholder="CNPJ"
            value={clienteCNPJ}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Telefone Comercial">Telefone Comercial</Label>
          <Input
            type="text"
            name="clienteTelComercial"
            placeholder="Telefone Comercial"
            value={clienteTelComercial}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Telefone Celular">Telefone Celular</Label>
          <Input
            type="text"
            name="clienteTelCelular"
            placeholder="Telefone Celular"
            value={clienteTelCelular}
            onChange={this.changeHandler}
          />
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="text"
              name="clienteEmail"
              placeholder="Email"
              value={clienteEmail}
              onChange={this.changeHandler}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="CEP">CEP</Label>
          <Input
            type="text"
            name="clienteCep"
            placeholder="CEP"
            value={clienteCep}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Logradouro">Logradouro</Label>
          <Input
            type="text"
            name="clienteLogradouro"
            placeholder="Logradouro"
            value={clienteLogradouro}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Número">Número</Label>
          <Input
            type="text"
            name="clienteNumero"
            placeholder="Número"
            value={clienteNumero}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Complemento">Complemento</Label>
          <Input
            type="text"
            name="clienteComplemento"
            placeholder="Complemento"
            value={clienteComplemento}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Bairro">Bairro</Label>
          <Input
            type="text"
            name="clienteBairro"
            placeholder="Bairro"
            value={clienteBairro}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Cidade">Cidade</Label>
          <Input
            type="text"
            name="clienteCidade"
            placeholder="Cidade"
            value={clienteCidade}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="UF">UF</Label>
          <Input
            type="text"
            name="clienteUF"
            placeholder="UF"
            value={clienteUF}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Situação">Situação</Label>
          <Input
            type="text"
            name="clienteSituacao"
            placeholder="Situação"
            value={clienteSituacao}
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
