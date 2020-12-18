import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <Link to="/" className="link-to-home-">
            <h1 className="website-name" id="name-of-website">
              FABIOLA PINA
            </h1>
          </Link>
          <div className="nav-bar">
            <Nav id="navigation">
              <Link to="/" className="link-to-home">
                HOME
              </Link>{" "}
              |{" "}
              <Link to="/about-me" className="link-to-about-me">
                ABOUT ME
              </Link>{" "}
              |{" "}
              <Link to="/my-projects" className="link-to-my-projects">
                MY PROJECTS
              </Link>{" "}
              |{" "}
              <Link to="/contact-me" className="link-to-contact-me">
                CONTACT ME
              </Link>{" "}
              | <a href="/html/">RESUME</a>
            </Nav>
          </div>
        </header>
      </div>
    );
  }
}
