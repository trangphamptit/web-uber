import React, { Component } from "react";
import "./HomePage.scss";
import RectangleButton from "../../components/buttons/RectangleButton";
import arrow_right from "../../img/arrow_right.png";
import welcome from "../../img/welcome.png";
import { withRouter } from "react-router-dom";
class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = (history, event) => {
    history.push("./phonepage");
    event.preventDefault();
  };
  render() {
    const { history } = this.props;
    return (
      <div className="homepage">
        <form className="formHomepage">
          <img className="welcome-img" src={welcome} />
          <h4>Your ride, on demand</h4>
          <p>
            Whether you're headed to work, the airport, or out on the town. Uber
            connects you with a reliable ride in minutes. One tap and a car
            comes directly to you.
          </p>

          <RectangleButton
            imgSrc={arrow_right}
            onClick={event => this.handleSubmit(history, event)}
          >
            Register with Phone
          </RectangleButton>
        </form>
      </div>
    );
  }
}

const HomePageWithRouter = withRouter(HomePage);
export default HomePageWithRouter;
