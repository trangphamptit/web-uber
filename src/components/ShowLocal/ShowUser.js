import React, { Component } from "react";

class ShowUser extends Component {
  constructor(props) {
    super(this.props);
  }
  render() {
    return (
      <div>
        <p>{props.username}</p>
        <p>{props.phonenumber}</p>
      </div>
    );
  }
}

export default ShowUser;
