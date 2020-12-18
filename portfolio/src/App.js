import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/about-me" exact component={AboutMe} />
            <Route path="/my-projects" exact component={MyProjects} />
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}
