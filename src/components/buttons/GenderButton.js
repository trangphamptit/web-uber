import "./GenderButton.scss";
import React, { Component } from "react";

class GenderButton extends Component {
  render() {
    return (
      <div>
        <img className="gender-img" src={this.props.imgSrc} />
      </div>
    );
  }
}

export default GenderButton;
