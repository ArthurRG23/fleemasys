import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";

export default class EmpresaAlterar extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      empresa: {
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
      }
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/empresa/${id}`);
      this.setState({ empresa: response.data[0] });
    } catch (error) {
      console.log(error);
    }
  }

  submitHandler(e) {
    this.setState({
      empresa: {
        [e.target.name]: e.target.value
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = this.state.empresa;

    api
      .put("/empresas/" + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push("/empresa");

    window.location.reload();
  }

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
    } = this.state.empresa;
    return (
      <Form id="formEmpresa" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="Razão Social">Razão Social</Label>
          <Input
            type="text"
            name="empresaRazaoSocial"
            placeholder="Razão Social"
            value={empresaRazaoSocial}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Nome Fantasia">Nome Fantasia</Label>
          <Input
            type="text"
            name="empresaNomeFantasia"
            placeholder="Nome Fantasia"
            value={empresaNomeFantasia}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CNPJ">CNPJ</Label>
          <Input
            type="text"
            name="empresaCNPJ"
            placeholder="CNPJ"
            value={empresaCNPJ}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Telefone">Telefone</Label>
          <Input
            type="text"
            name="empresaTelefone"
            placeholder="Telefone"
            value={empresaTelefone}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Telefone 2">Telefone 2</Label>
          <Input
            type="text"
            name="empresaTelefone2"
            placeholder="Telefone 2"
            value={empresaTelefone2}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="text"
            name="empresaEmail"
            placeholder="Email"
            value={empresaEmail}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CEP">CEP</Label>
          <Input
            type="text"
            name="empresaCep"
            placeholder="CEP"
            value={empresaCep}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Logradouro">Logradouro</Label>
          <Input
            type="text"
            name="empresaLogradouro"
            placeholder="Logradouro"
            value={empresaLogradouro}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Número">Número</Label>
          <Input
            type="text"
            name="empresaNumero"
            placeholder="Número"
            value={empresaNumero}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Complemento">Complemento</Label>
          <Input
            type="text"
            name="empresaComplemento"
            placeholder="Complemento"
            value={empresaComplemento}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Bairro">Bairro</Label>
          <Input
            type="text"
            name="empresaBairro"
            placeholder="Bairro"
            value={empresaBairro}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Cidade">Cidade</Label>
          <Input
            type="text"
            name="empresaCidade"
            placeholder="Cidade"
            value={empresaCidade}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="UF">UF</Label>
          <Input
            type="text"
            name="empresaUF"
            placeholder="UF"
            value={empresaUF}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Situação">Situação</Label>
          <Input
            type="text"
            name="empresaSituacao"
            placeholder="Situação"
            value={empresaSituacao}
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
