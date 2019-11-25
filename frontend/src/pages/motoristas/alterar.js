import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";

export default class MotoristaAlterar extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      motorista: {
        motoristaNome: "",
        motoristaCPF: "",
        motoristaRG: "",
        motoristaCNH: "",
        motoristaExameMedico: "",
        motoristaDataNascimento: "",
        motoristaTelResidencial: "",
        motoristaExameMedico: "",
        motoristaDataNascimento: "",
        motoristaTelResidencial: "",
        motoristaLogradouro: "",
        motoristaNumero: "",
        motoristaComplemento: "",
        motoristaBairro: "",
        motoristaCidade: "",
        motoristaUF: ""
      }
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/motoristas/${id}`);
      this.setState({ motorista: response.data[0] });
    } catch (error) {
      console.log(error);
    }
  }

  submitHandler(e) {
    this.setState({
      motorista: {
        [e.target.name]: e.target.value
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = this.state.motorista;

    api
      .put("/motoristas/" + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push("/motoristas");

    window.location.reload();
  }

  render() {
    const {
      motoristaNome,
      motoristaCPF,
      motoristaRG,
      motoristaCNH,
      motoristaExameMedico,
      motoristaDataNascimento,
      motoristaTelCelular,
      motoristaEmail,
      motoristaTelResidencial,
      motoristaLogradouro,
      motoristaNumero,
      motoristaComplemento,
      motoristaBairro,
      motoristaCidade,
      motoristaUF
    } = this.state.motorista;
    return (
      <Form id="formMotoristas" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="Nome">Nome</Label>
          <Input
            type="text"
            name="motoristaNome"
            placeholder="Nome"
            value={motoristaNome}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CPF">CPF</Label>
          <Input
            type="text"
            name="motoristaCPF"
            placeholder="CPF"
            value={motoristaCPF}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="RG">RG</Label>
          <Input
            type="text"
            name="motoristaRG"
            placeholder="RG"
            value={motoristaRG}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CNH">CNH</Label>
          <Input
            type="text"
            name="motoristaCNH"
            placeholder="CNH"
            value={motoristaCNH}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Exame Médico">Exame Médico</Label>
          <Input
            type="text"
            name="motoristaExameMedico"
            placeholder="Exame Médico"
            value={motoristaExameMedico}
            onChange={this.submitHandler}
          />
          <FormGroup>
            <Label for="Data Nascimento">Data Nascimento</Label>
            <Input
              type="text"
              name="motoristaDataNascimento"
              placeholder="Data Nascimento"
              value={motoristaDataNascimento}
              onChange={this.submitHandler}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="Tel Residencial">Tel Residencial</Label>
          <Input
            type="text"
            name="motoristaTelResidencial"
            placeholder="Tel Residencial"
            value={motoristaTelResidencial}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Celular">Celular</Label>
          <Input
            type="text"
            name="motoristaTelCelular"
            placeholder="Celular"
            value={motoristaTelCelular}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="text"
            name="motoristaEmail"
            placeholder="Email"
            value={motoristaEmail}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Logradouro">Logradouro</Label>
          <Input
            type="text"
            name="motoristaLogradouro"
            placeholder="Logradouro"
            value={motoristaLogradouro}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Número">Número</Label>
          <Input
            type="text"
            name="motoristaNumero"
            placeholder="Número"
            value={motoristaNumero}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Complemento">Complemento</Label>
          <Input
            type="text"
            name="motoristaComplemento"
            placeholder="Complemento"
            value={motoristaComplemento}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Bairro">Bairro</Label>
          <Input
            type="text"
            name="motoristaBairro"
            placeholder="Bairro"
            value={motoristaBairro}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Cidade">Cidade</Label>
          <Input
            type="text"
            name="motoristaCidade"
            placeholder="Cidade"
            value={motoristaCidade}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="UF">UF</Label>
          <Input
            type="text"
            name="motoristaUF"
            placeholder="UF"
            value={motoristaUF}
            onChange={this.submitHandler}
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
