import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <main>
          <h1>Hello,</h1>
          <h3>
            I am a software engineer who seeks to create user-friendly apps and
            websites.
          </h3>
        </main>
        <hr />
        <Footer />
      </div>
    );
  }
}
