import React, { Component } from "react";
import "./UserPage.scss";
import male from "../../img/male.png";
import female from "../../img/female.png";
import loadfile from "../../img/loadfile.png";
import CircleButton from "../../components/buttons/CircleButton";
import iconbutton from "../../img/iconbutton.png";
import { withFormik, Field, Form } from "formik";
class UserPage extends Component {
  constructor(props) {
    super(props);
  }
  setGender(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="userpage">
        <Form className="formUserpage">
          <h4>Enter your Infor</h4>
          <Field
            id="name-field"
            type="text"
            placeholder="Enter your full name"
            name="username"
          />
          <span className="select-gender">Select gender</span>
          <div className="choose-gender" onChange={this.setGender.bind(this)}>
            <label className="gender">
              <Field type="radio" value="male" name="gender" />
              <img src={male} />
            </label>
            <label className="gender">
              <Field type="radio" value="female" name="gender" />
              <img src={female} />
            </label>
          </div>
          <div className="upload-photo">
            <Field
              className="fileUpload"
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />

            <label style={{ left: "0px", position: "absolute" }} for="avatar">
              Upload profile picture
            </label>
          </div>
          <CircleButton imgSrc={iconbutton} onClick={this.handleSubmit} />
        </Form>
      </div>
    );
  }
}

const UserPageForm = withFormik({
  mapPropsToValues({ username, gender, avatar }) {
    return {
      username: "",
      gender: "",
      avatar: ""
    };
  },

  handleSubmit(values, { props }) {
    const { username, gender, avatar } = values;
    localStorage.setItem("username", username);
    localStorage.setItem("gender", gender);
    let tmps = avatar.split("\\");
    // console.log(tmps);
    let filename = tmps[tmps.length - 1];
    localStorage.setItem("avatar", filename);
    props.history.push("/showmappage");
  }

  // validationSchema: Yup.object().shape({
  //   phonenumber: Yup.string()
  //     .required("Phone number is required")
  //     .min(10, "Phone number must have min 10 characters")
  //     .max(11, "Phone number must have max 11 characters")
  // })
})(UserPage);
export default UserPageForm;
// export default UserPage;
