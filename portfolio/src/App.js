import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 class="website-name" id="name-of-website">
            FABIOLA PINA
          </h1>
          <nav class="nav-bar" id="navigation">
            <a href="/html/">HOME</a> | <a href="/css/">ABOUT ME</a> |
            <a href="/js/">MY PROJECTS</a> | <a href="/python/">TESTIMONIALS</a>{" "}
            |<a href="/html/">CONTACT ME</a> |<a href="/html/">RESUME</a>
          </nav>
        </header>
        <hr />
        <main>
          <h1>Hello,</h1>
          <h3>
            I am a software engineer who seeks to create user-friendly apps and
            websites.
          </h3>
        </main>
        <hr />
        <footer>
          <p>
            FIND ME ON GITHUB, LINKEDIN, TWITTER, TIKTOK, INSTAGRAM, AND MEDIUM
          </p>
        </footer>
      </div>
    );
  }
}
