import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="website-name" id="name-of-website">
            FABIOLA PINA
          </h1>
          <div className="nav-bar">
            <Nav id="navigation">
              <Link to="/" style={{ textDecoration: "none" }}>
                HOME
              </Link>{" "}
              |{" "}
              <Link to="/about-me" style={{ textDecoration: "none" }}>
                ABOUT ME
              </Link>{" "}
              |{" "}
              <Link to="/my-projects" style={{ textDecoration: "none" }}>
                MY PROJECTS
              </Link>{" "}
              |{" "}
              <Link to="/contact-me" style={{ textDecoration: "none" }}>
                CONTACT ME
              </Link>{" "}
              |{" "}
              <a
                href="https://docs.google.com/document/d/1xfdimXTQNTZAxKh_yYcIMrvWXHFCG2PzKF4YiMVuskY/edit"
                target="_blank"
              >
                RESUME
              </a>{" "}
              |{" "}
              <a href="https://github.com/fabiolamariapina" target="_blank">
                GITHUB
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/fabiolampina/"
                target="_blank"
              >
                LINKEDIN
              </a>{" "}
            </Nav>
          </div>
        </header>
      </div>
    );
  }
}
