import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import Header from '../../components/Header';
// import Accordion from '../../components/Accordion';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default class MotoristaNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      motoristaUF: "",
      motoristaCep: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    try {
      e.preventDefault();
      console.log(this.state);
      api.post("/motoristas", this.state).then(res => console.log(res.data));

      this.props.history.push("/motoristas");

      window.location.reload();
    } catch {
      console.log("erro");
    }
  };

  render() {
    const {
      motoristaNome,
      motoristaCPF,
      motoristaRG,
      motoristaCNH,
      motoristaDataNascimento,
      motoristaTelCelular,
      motoristaEmail,
      motoristaTelResidencial,
      motoristaExameMedico,
      motoristaLogradouro,
      motoristaNumero,
      motoristaComplemento,
      motoristaBairro,
      motoristaCidade,
      motoristaUF,
      motoristaCep
    } = this.state;
    return (
      <Form id="formMotoristas" onSubmit={this.submitHandler}>
        <FormGroup>
          <Label for="Nome">Nome</Label>
          <Input
            type="text"
            name="motoristaNome"
            placeholder="Nome"
            value={motoristaNome}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CPF">CPF</Label>
          <Input
            type="text"
            name="motoristaCPF"
            placeholder="CPF"
            value={motoristaCPF}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="RG">RG</Label>
          <Input
            type="text"
            name="motoristaRG"
            placeholder="RG"
            value={motoristaRG}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CNH">CNH</Label>
          <Input
            type="text"
            name="motoristaCNH"
            placeholder="CNH"
            value={motoristaCNH}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Exame Médico">Exame Médico</Label>
          <Input
            type="text"
            name="motoristaExameMedico"
            placeholder="Exame Médico"
            value={motoristaExameMedico}
            onChange={this.changeHandler}
          />
          <FormGroup>
            <Label for="Data Nascimento">Data Nascimento</Label>
            <Input
              type="text"
              name="motoristaDataNascimento"
              placeholder="Data Nascimento"
              value={motoristaDataNascimento}
              onChange={this.changeHandler}
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
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Celular">Celular</Label>
          <Input
            type="text"
            name="motoristaTelCelular"
            placeholder="Celular"
            value={motoristaTelCelular}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="text"
            name="motoristaEmail"
            placeholder="Email"
            value={motoristaEmail}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Logradouro">Logradouro</Label>
          <Input
            type="text"
            name="motoristaLogradouro"
            placeholder="Logradouro"
            value={motoristaLogradouro}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Número">Número</Label>
          <Input
            type="text"
            name="motoristaNumero"
            placeholder="Número"
            value={motoristaNumero}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Complemento">Complemento</Label>
          <Input
            type="text"
            name="motoristaComplemento"
            placeholder="Complemento"
            value={motoristaComplemento}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Bairro">Bairro</Label>
          <Input
            type="text"
            name="motoristaBairro"
            placeholder="Bairro"
            value={motoristaBairro}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Cidade">Cidade</Label>
          <Input
            type="text"
            name="motoristaCidade"
            placeholder="Cidade"
            value={motoristaCidade}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="UF">UF</Label>
          <Input
            type="text"
            name="motoristaUF"
            placeholder="UF"
            value={motoristaUF}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CEP">CEP</Label>
          <Input
            type="text"
            name="motoristaCep"
            placeholder="CEP"
            value={motoristaCep}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <Button type="submit" color="warning">
          Adicionar
        </Button>{" "}
        <a href="javascript:window.history.go(-1);" className="btn btn-danger">
          <span className="glyphicon glyphicon-remove"></span> Cancelar
        </a>
      </Form>
    );
  }
}
