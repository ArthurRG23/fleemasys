import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import Header from '../../components/Header';
// import Accordion from '../../components/Accordion';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default class UsuarioNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuarioNome: "",
      usuarioCPF: "",
      usuarioLogin: "",
      usuarioSenha: "",
      usuarioContato: "",
      usuarioTipo: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    try {
      e.preventDefault();
      console.log(this.state);
      api.post("/usuarios", this.state).then(res => console.log(res.data));

      this.props.history.push("/usuarios");

      window.location.reload();
    } catch {
      console.log("erro");
    }
  };

  render() {
    const {
      usuarioNome,
      usuarioCPF,
      usuarioLogin,
      usuarioSenha,
      usuarioContato,
      usuarioTipo
    } = this.state;
    return (
      <Form id="formUsuarios" onSubmit={this.submitHandler}>
        <FormGroup>
          <Label for="nome">Nome</Label>
          <Input
            type="text"
            name="usuarioNome"
            placeholder="Nome completo"
            value={usuarioNome}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CPF">CPF</Label>
          <Input
            type="text"
            name="usuarioCPF"
            placeholder="CPF"
            value={usuarioCPF}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="usuario">Usuário</Label>
          <Input
            type="text"
            name="usuarioLogin"
            placeholder="Usuário"
            value={usuarioLogin}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nome">Senha</Label>
          <Input
            type="password"
            name="usuarioSenha"
            placeholder="Senha"
            value={usuarioSenha}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contato">contato</Label>
          <Input
            type="text"
            name="usuarioContato"
            placeholder="Contato"
            value={usuarioContato}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="tipo">Tipo</Label>
          <Input
            type="select"
            name="usuarioTipo"
            onChange={this.changeHandler}
            value={usuarioTipo}
          >
            <option>Administrador</option>
            <option>Gerente</option>
            <option>Padrão</option>
          </Input>
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
