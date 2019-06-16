import React, { Component } from "react";
import "./CircleButton.scss";

class CircleButton extends Component {
  render() {
    return (
      <div>
        <button type="submit" className="circle-button">
          <img src={this.props.imgSrc} />
        </button>
      </div>
    );
  }
}
export default CircleButton;
