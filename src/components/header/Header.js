import React, { Component } from "react";
import "./Header.scss";
import logo from "../../img/logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="logo-uber" />
        <a href="#">
          <i className="fas fa-bars" />
        </a>
      </header>
    );
  }
}

export default Header;
