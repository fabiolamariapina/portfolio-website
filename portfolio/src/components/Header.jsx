import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1 class="website-name" id="name-of-website">
          FABIOLA PINA
        </h1>
        <nav class="nav-bar" id="navigation">
          <a href="/html/">HOME</a> | <a href="/css/">ABOUT ME</a> |{" "}
          <a href="/js/">MY PROJECTS</a> | <a href="/python/">TESTIMONIALS</a> |{" "}
          <a href="/html/">CONTACT ME</a> | <a href="/html/">RESUME</a>
        </nav>
      </header>
    );
  }
}
