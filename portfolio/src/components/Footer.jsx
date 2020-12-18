import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer>
          <p className="find-me">
            FIND ME ON
            <a
              className="linkedIn-link"
              href="https://github.com/fabiolamariapina"
              target="_blank"
            >
              {" "}
              GITHUB{" "}
            </a>
            AND
            <a
              className="linkedIn-link"
              href="https://www.linkedin.com/in/fabiolampina/"
              target="_blank"
            >
              {" "}
              LINKEDIN{" "}
            </a>
          </p>
        </footer>
      </div>
    );
  }
}
