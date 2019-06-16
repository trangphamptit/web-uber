import "./RectangleButton.scss";
import React, { Component } from "react";

class RectangleButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.onClick);
    return (
      <div>
        <button
          type="submit"
          className="rectangle-button"
          onClick={this.props.onClick}
        >
          {this.props.children}
          <img className="arrow" src={this.props.imgSrc} />
        </button>
      </div>
    );
  }
}

export default RectangleButton;
