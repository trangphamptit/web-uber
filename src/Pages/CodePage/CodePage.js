import React, { Component } from "react";
import "./CodePage.scss";
import CircleButton from "../../components/buttons/CircleButton";
import iconbutton from "../../img/iconbutton.png";
import { FieldArray, Form, Field, withFormik, Formik } from "formik";
import { withRouter } from "react-router-dom";
import * as Yup from "yup";

class CodePage extends Component {
  constructor(props) {
    super(props);
  }

  maxLengthCheck(value) {
    if (value.length > value.maxLength) value = value.slice(0, value.maxLength);
  }
  validateCodes(value) {
    let error;
    if (value.length < 4) {
      error = "required code";
    }
    return error;
  }
  render() {
    return (
      <div className="codepage">
        <Formik
          initialValues={{ codeFields: ["", "", "", ""] }}
          onSubmit={values => {
            console.log(values.codeFields);
            const { history } = this.props;
            history.push("/userpage");
            localStorage.setItem("codeFields", values.codeFields);
          }}
          render={({ values }) => (
            <Form className="formCodepage">
              <p>
                Enter the 4-digit code sent to you at 1847129477.{" "}
                <a className="ask-link check-number" href="#">
                  did you enter the correct number?
                </a>
              </p>
              <FieldArray
                name="codeFields"
                render={arrayHeppers => (
                  <ul className="codes">
                    {values.codeFields.map((code, index) => (
                      <li key={index}>
                        <Field
                          name={`codeFields.[${index}]`}
                          render={({ field }) => (
                            <input
                              className="code"
                              onInput={this.maxLengthCheck(this)}
                              maxLength="1"
                              min="0"
                              max="9"
                              {...field}
                            />
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              />
              <div className="modal-footer">
                <a href="#" className="ask-link ask-code">
                  I didn't receive code
                </a>

                <CircleButton
                  imgSrc={iconbutton}
                  onSubmit={this.handleSubmit}
                />
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}

// const FormCodePage = withFormik({
//   handleSubmit(values, { props }) {

//     console.log(props.history);
//     props.history.push("/homepage");
//   },

//   validationSchema: Yup.object().shape({
//     codeFields: Yup.string().required("Phone number is required")
//   })
// })(CodePage);
export default CodePage;
