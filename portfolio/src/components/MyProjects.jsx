import React, { Component } from "react";

export default class MyProjects extends Component {
  render() {
    return (
      <div className="projects-page">
        <h1 className="my-projects" id="my-projects-header">
          My Projects
        </h1>
        <div className="projects">
          <h3 className="my-projects" id="completed-projects">
            Completed Projects
          </h3>
          <div className="project-images-and-link">
            <p className="my-projects">
              <a
                href="https://mern-destinations.herokuapp.com/"
                target="_blank"
                id="dream-destinations-link"
              >
                Dream Destinations
              </a>{" "}
            </p>
            <img
              className="my-projects"
              id="dream-destinations"
              src="/images/DreamDestinations.jpg"
              alt="dream destinations"
            />
            <br />
            <p className="my=projects" id="dream-destinations-description">
              Dream Destinations is a travel destinations bucket list
              application. It is the group project I was a part of in General
              Assembly's software engineering immersive. As part of this
              project, I was responsible for coming up with the app idea,
              wireframing, styling the landing page, and setting up react
              router. You can add travel spots you'd like to go to using the
              name, description and image of the destination. You can then add
              your favorites to a seperate list to keep them handy. The
              technologies my group and I used for this app were React.js, React
              Router, and materialize.css. For version control, we utilized Git.
              For more information, visit the Github page{" "}
              <a
                href="https://github.com/TCJohnson1/MERN-location-front"
                target="_blank"
                id="dream-destinations-github-page"
              >
                here.
              </a>{" "}
            </p>
          </div>
          <h3 className="my-projects" id="in-progress">
            In Progress{" "}
          </h3>
        </div>
      </div>
    );
  }
}
