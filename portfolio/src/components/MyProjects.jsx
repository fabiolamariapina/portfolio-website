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
          <p className="my-projects">
            <a
              href="https://github.com/fabiolamariapina/100-days-of-code/tree/master/makeup-organizer"
              target="_blank"
              id="makeup-organizer-link"
            >
              Makeup Organizer
            </a>{" "}
          </p>
          <img
            className="my-projects"
            id="makeup-organizer"
            src="/images/makeup-organizer.jpg"
            alt="makeup"
          />
          <p className="my=projects" id="makeup-organizer-description">
            Makeup Organizer is a makeup organization app. The user creates an
            account or logs in, they can add, edit, or delete items in their
            collection. This app was originally done with Node, Express, and EJS
            as my second project in General Assembly's bootcamp. Now, I am
            updating it and improving it using React and React Router. I am also
            planning on experimenting with a new CSS framework like Bulma or
            materialize. To follow along as I create this app, visit the Github
            page{" "}
            <a
              href="https://github.com/fabiolamariapina/100-days-of-code/tree/master/makeup-organizer"
              target="_blank"
              id="makeup-organizer-github-page"
            >
              here.
            </a>{" "}
          </p>
          <p className="my-projects">
            <a
              href="https://github.com/fabiolamariapina/skincare-routine"
              target="_blank"
              id="skincare-routine-link"
            >
              Skincare Routine
            </a>{" "}
          </p>
          <img
            className="my-projects"
            id="skincare-routine"
            src="/images/skincare-routine.jpg"
            alt="makeup"
          />
          <p className="my=projects" id="skincare-routine-description">
            Skincare Routine is a skincare organization app. Like it's intended
            sister app, Makeup Organizer, once the user creates an account or
            logs in, they can add, edit, or delete items in their collection. I
            am also planning on adding a friends feature, where the user can add
            friends, and a profile page feature, where the user's information on
            their skin can be seen. This app is my final project for General
            Assembly's bootcamp. It is being made using the MERN stack for the
            front-end and back-end functionality, React Router, and Prime React
            for the UI framework. To follow along as I create this app, visit
            the Github page{" "}
            <a
              href="https://github.com/fabiolamariapina/skincare-routine"
              target="_blank"
              id="skincare-routine-github-page"
            >
              here.
            </a>{" "}
          </p>
        </div>
      </div>
    );
  }
}
