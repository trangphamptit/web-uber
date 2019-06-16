import React, { Component } from "react";
import { directive } from "@babel/types";
// import ShowUser from "./ShowUser";
class ShowLocal extends Component {
  constructor(props) {
    super(props);
    let username = localStorage.getItem("username");
    let avatar = localStorage.getItem("avatar");
    let phonenumber = localStorage.getItem("phonenumber");
    this.state = {
      username: username,
      avatar: avatar,
      phonenumber: phonenumber
    };
  }

  render() {
    return (
      <div>
        <label className="userName">{this.state.username}</label>
        <label className="phoneNumber">{this.state.phonenumber}</label>
        <img className="avatar" src={this.state.avatar} alt="" />
      </div>
    );
  }
}

export default ShowLocal;
