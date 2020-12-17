import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="find-me">
          FIND ME ON GITHUB AND
          <a
            className="linkedIn-link"
            href="https://www.linkedin.com/in/fabiolampina/"
            target="_blank"
          >
            LINKEDIN
          </a>
        </p>
      </footer>
    );
  }
}
