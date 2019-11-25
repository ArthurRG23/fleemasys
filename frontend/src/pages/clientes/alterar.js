import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";

export default class ClienteAlterar extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      cliente: {
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
      }
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/clientes/${id}`);
      this.setState({ cliente: response.data[0] });
    } catch (error) {
      console.log(error);
    }
  }

  submitHandler(e) {
    this.setState({
      cliente: {
        [e.target.name]: e.target.value
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = this.state.cliente;

    api
      .put("/clientes/" + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push("/clientes");

    window.location.reload();
  }

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
    } = this.state.cliente;
    return (
      <Form id="formClientes" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="Razão Social">Razão Social</Label>
          <Input
            type="text"
            name="clienteRazaoSocial"
            placeholder="Razão Social"
            value={clienteRazaoSocial}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Nome Fantasia">Nome Fantasia</Label>
          <Input
            type="text"
            name="clienteNMFantasia"
            placeholder="Nome Fantasia"
            value={clienteNMFantasia}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CNPJ">CNPJ</Label>
          <Input
            type="text"
            name="clienteCNPJ"
            placeholder="CNPJ"
            value={clienteCNPJ}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Telefone Comercial">Telefone Comercial</Label>
          <Input
            type="text"
            name="clienteTelComercial"
            placeholder="Telefone Comercial"
            value={clienteTelComercial}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Telefone Celular">Telefone Celular</Label>
          <Input
            type="text"
            name="clienteTelCelular"
            placeholder="Telefone Celular"
            value={clienteTelCelular}
            onChange={this.submitHandler}
          />
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="text"
              name="clienteEmail"
              placeholder="Email"
              value={clienteEmail}
              onChange={this.submitHandler}
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
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Logradouro">Logradouro</Label>
          <Input
            type="text"
            name="clienteLogradouro"
            placeholder="Logradouro"
            value={clienteLogradouro}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Número">Número</Label>
          <Input
            type="text"
            name="clienteNumero"
            placeholder="Número"
            value={clienteNumero}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Complemento">Complemento</Label>
          <Input
            type="text"
            name="clienteComplemento"
            placeholder="Complemento"
            value={clienteComplemento}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Bairro">Bairro</Label>
          <Input
            type="text"
            name="clienteBairro"
            placeholder="Bairro"
            value={clienteBairro}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Cidade">Cidade</Label>
          <Input
            type="text"
            name="clienteCidade"
            placeholder="Cidade"
            value={clienteCidade}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="UF">UF</Label>
          <Input
            type="text"
            name="clienteUF"
            placeholder="UF"
            value={clienteUF}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Situação">Situação</Label>
          <Input
            type="text"
            name="clienteSituacao"
            placeholder="Situação"
            value={clienteSituacao}
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
