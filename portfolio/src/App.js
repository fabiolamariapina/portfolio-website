import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <main>
          <Landing />
        </main>
        <hr />
        <Footer />
      </div>
    );
  }
}
