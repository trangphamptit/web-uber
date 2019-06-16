import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <label>
          <i className="far fa-copyright" />
          2019 Uber Technologies Inc All Rights Reserved
        </label>
        <ul className="about-us">
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Legal Notices</a>
          </li>
          <li className="last">
            <a href="#">Privacy & Security</a>
          </li>
        </ul>
      </div>

      <ul className="footer-right">
        <li>
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
        <li className="last">
          <a href="#">
            <i className="fab fa-youtube" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
