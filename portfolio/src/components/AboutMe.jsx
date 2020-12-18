import React, { Component } from "react";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="about-page">
        <h1 className="about-me" id="about-me-header">
          About Me
        </h1>
        <div className="about-me-spiel">
          <p className="about-me" id="about-me-spiel-part-1">
            Hello, my name is Fabiola, but most people call me Fabi. I am a
            software engineer who aims to create user-friendly apps and
            websites. After graduating from Rollins College with double majors
            in political science and anthropology, I decided to begin my coding
            journey with She Codes. I fell in love with coding so much that I
            decided to sign up for General Assembly’s software engineering
            immersive. My background in the social sciences, along with my
            community engagement experience, has made me adept at knowing what
            people like and need, which helps me create user-friendly apps and
            websites.
          </p>
          <p className="about-me" id="about-me-spiel-part-2">
            My skills include HTML, CSS, JavaScript, React, RESTful API,
            Node.js, Express, Mongo DB, Mongoose, APIs, Git, Github, PostgreSQL,
            BCrypt, Heroku, Axios, responsive design, and command lines. I am
            also in the process of adding Python to my list of skills by taking
            The Modern Python 3 Bootcamp course on Udemy. My other professional
            interests outside of software engineering are user experience, data
            science, tech policy, diversity and inclusion in tech, and social
            innovation and entrepreneurship.
          </p>
          <p className="about-me" id="about-me-spiel-part-3">
            Outside of work, I love to lift weights, do yoga, inline skate,
            sing, listen to music, and watch Youtube and documentaries. I am
            also interested in learning how to play the guitar and re-learning
            the piano. My other personal goals are to learn how to surf, earn my
            SCUBA certification, and compete in a powerlifting meet.
          </p>
          <p className="about-me" id="about-me-spiel-part-4">
            You can find me on{" "}
            <a
              className="linkedIn-link"
              href="https://github.com/fabiolamariapina"
              target="_blank"
            >
              {" "}
              Github{" "}
            </a>{" "}
            and{" "}
            <a
              className="linkedIn-link"
              href="https://www.linkedin.com/in/fabiolampina/"
              target="_blank"
            >
              {" "}
              LinkedIn.{" "}
            </a>
          </p>
        </div>
      </div>
    );
  }
}
