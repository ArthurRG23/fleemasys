import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import Header from '../../components/Header';
// import Accordion from '../../components/Accordion';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default class EmpresaNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empresaRazaoSocial: "",
      empresaNomeFantasia: "",
      empresaCNPJ: "",
      empresaTelefone: "",
      empresaTelefone2: "",
      empresaEmail: "",
      empresaCep: "",
      empresaLogradouro: "",
      empresaNumero: "",
      empresaComplemento: "",
      empresaBairro: "",
      empresaCidade: "",
      empresaUF: "",
      empresaSituacao: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    try {
      e.preventDefault();
      console.log(this.state);
      api.post("/empresa", this.state).then(res => console.log(res.data));

      this.props.history.push("/empresa");

      window.location.reload();
    } catch {
      console.log("erro");
    }
  };

  render() {
    const {
      empresaRazaoSocial,
      empresaNomeFantasia,
      empresaCNPJ,
      empresaTelefone,
      empresaTelefone2,
      empresaEmail,
      empresaCep,
      empresaLogradouro,
      empresaNumero,
      empresaComplemento,
      empresaBairro,
      empresaCidade,
      empresaUF,
      empresaSituacao
    } = this.state;
    return (
      <Form id="formEmpresa" onSubmit={this.submitHandler}>
        <FormGroup>
          <Label for="Razão Social">Razão Social</Label>
          <Input
            type="text"
            name="empresaRazaoSocial"
            placeholder="Razão Social"
            value={empresaRazaoSocial}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Nome Fantasia">Nome Fantasia</Label>
          <Input
            type="text"
            name="empresaNomeFantasia"
            placeholder="Nome Fantasia"
            value={empresaNomeFantasia}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CNPJ">CNPJ</Label>
          <Input
            type="text"
            name="empresaCNPJ"
            placeholder="CNPJ"
            value={empresaCNPJ}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Telefone">Telefone</Label>
          <Input
            type="text"
            name="empresaTelefone"
            placeholder="Telefone"
            value={empresaTelefone}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Telefone 2">Telefone 2</Label>
          <Input
            type="text"
            name="empresaTelefone2"
            placeholder="Telefone 2"
            value={empresaTelefone2}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="text"
            name="empresaEmail"
            placeholder="Email"
            value={empresaEmail}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CEP">CEP</Label>
          <Input
            type="text"
            name="empresaCep"
            placeholder="CEP"
            value={empresaCep}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Logradouro">Logradouro</Label>
          <Input
            type="text"
            name="empresaLogradouro"
            placeholder="Logradouro"
            value={empresaLogradouro}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Número">Número</Label>
          <Input
            type="text"
            name="empresaNumero"
            placeholder="Número"
            value={empresaNumero}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Complemento">Complemento</Label>
          <Input
            type="text"
            name="empresaComplemento"
            placeholder="Complemento"
            value={empresaComplemento}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Bairro">Bairro</Label>
          <Input
            type="text"
            name="empresaBairro"
            placeholder="Bairro"
            value={empresaBairro}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Cidade">Cidade</Label>
          <Input
            type="text"
            name="empresaCidade"
            placeholder="Cidade"
            value={empresaCidade}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="UF">UF</Label>
          <Input
            type="text"
            name="empresaUF"
            placeholder="UF"
            value={empresaUF}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Situação">Situação</Label>
          <Input
            type="text"
            name="empresaSituacao"
            placeholder="Situação"
            value={empresaSituacao}
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
