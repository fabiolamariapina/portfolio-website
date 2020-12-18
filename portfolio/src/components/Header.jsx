import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="website-name" id="name-of-website">
          FABIOLA PINA
        </h1>
        <div className="nav-bar">
          <Nav id="navigation">
            <a href="/html/">HOME</a> | <a href="/css/">ABOUT ME</a> |{" "}
            <a href="/js/">MY PROJECTS</a> | <a href="/python/">TESTIMONIALS</a>{" "}
            | <a href="/html/">CONTACT ME</a> | <a href="/html/">RESUME</a>
          </Nav>
        </div>
      </header>
    );
  }
}
