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
              | <a href="/html/">RESUME</a> |{" "}
              <Link to="/contact-me" cstyle={{ textDecoration: "none" }}>
                GITHUB
              </Link>{" "}
              |{" "}
              <Link to="/contact-me" style={{ textDecoration: "none" }}>
                LINKEDIN
              </Link>
            </Nav>
          </div>
        </header>
      </div>
    );
  }
}
