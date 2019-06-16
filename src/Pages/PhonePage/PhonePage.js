import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "./PhonePage.scss";
import iconbutton from "../../img/iconbutton.png";
import CircleButton from "../../components/buttons/CircleButton";

class PhonePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="phonepage">
        <Form className="formPhonepage">
          <h4>Get moving with Uber</h4>
          <div className="phone-number">
            <label for="number">+84</label>
            <Field
              type="number"
              name="phonenumber"
              placeholder="enter your mobile number"
            />

            <label>{this.props.errors.phonenumber}</label>
          </div>
          <div className="check-agree">
            <Field
              type="checkbox"
              id="checkbox_id"
              name="agree"
              checked={this.props.values.agree}
            />
            <label for="checkbox_id"> Agree Terms and conditions</label>
          </div>
          <div className="phone-btn">
            <CircleButton imgSrc={iconbutton} onClick={this.handleSubmit} />
          </div>
        </Form>
      </div>
    );
  }
}

const FormikForm = withFormik({
  mapPropsToValues({ phonenumber, agree }) {
    return {
      phonenumber: "",
      agree: true
    };
  },
  handleSubmit(values, { props }) {
    console.log(values);
    const { phonenumber, agree } = values;
    localStorage.setItem("phonenumber", phonenumber);
    localStorage.setItem("agree", agree);
    props.history.push("/codepage");
  },

  validationSchema: Yup.object().shape({
    phonenumber: Yup.string()
      .required("Phone number is required")
      .min(10, "Phone number must have min 10 characters")
      .max(11, "Phone number must have max 11 characters")
  })
})(PhonePage);
export default FormikForm;
