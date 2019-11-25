import React from "react";
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem
// } from 'reactstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import logo from "../../assets/logo-texto.png";

const Example = props => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg  ">
        <img alt="logo" id="logo-texto" src={logo}></img>
        <a className="navbar-brand" id="logo-texto" href="/main"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
};

export default Example;
