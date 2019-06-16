import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./MainPage.scss";
class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>{this.props.children}</section>

        <Footer />
      </div>
    );
  }
}

export default MainPage;
