import React, { Component } from "react";

export default class MyProjects extends Component {
  render() {
    return (
      <div className="projects-page">
        <h1 className="my-projects" id="my-projects-header">
          My Projects
        </h1>
        <h3 className="my-projects" id="completed-projects">
          Completed Projects
        </h3>
        <h3 className="my-projects" id="in-progress">
          In Progress{" "}
        </h3>
      </div>
    );
  }
}
