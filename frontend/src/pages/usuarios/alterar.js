import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";

export default class UsuarioAlterar extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      usuario: {
        usuarioNome: "",
        usuarioCPF: "",
        usuarioLogin: "",
        usuarioSenha: "",
        usuarioContato: "",
        usuarioTipo: ""
      }
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/usuarios/${id}`);
      this.setState({ usuario: response.data[0] });
    } catch (error) {
      console.log(error);
    }
  }

  submitHandler(e) {
    this.setState({
      usuario: {
        [e.target.name]: e.target.value
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = this.state.usuario;

    api
      .put("/usuarios/" + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push("/usuarios");
    window.location.reload();
  }

  render() {
    const {
      usuarioNome,
      usuarioCPF,
      usuarioLogin,
      usuarioSenha,
      usuarioContato,
      usuarioTipo
    } = this.state.usuario;
    return (
      <Form id="formUsuarios" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="nome">Nome</Label>
          <Input
            type="text"
            name="usuarioNome"
            placeholder="Nome completo"
            value={usuarioNome}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CPF">CPF</Label>
          <Input
            type="text"
            name="usuarioCPF"
            placeholder="CPF"
            value={usuarioCPF}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="usuario">Usuário</Label>
          <Input
            type="text"
            name="usuarioLogin"
            placeholder="Usuário"
            value={usuarioLogin}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nome">Senha</Label>
          <Input
            type="password"
            name="usuarioSenha"
            placeholder="Senha"
            value={usuarioSenha}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contato">contato</Label>
          <Input
            type="text"
            name="usuarioContato"
            placeholder="Contato"
            value={usuarioContato}
            onChange={this.submitHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="tipo">Tipo</Label>
          <Input
            type="select"
            name="usuarioTipo"
            onChange={this.submitHandler}
            value={usuarioTipo}
          >
            <option>Administrador</option>
            <option>Gerente</option>
            <option>Motorista</option>
          </Input>
        </FormGroup>
        <Button type="submit" color="warning">
          Salvar
        </Button>{" "}
      </Form>
    );
  }
}
