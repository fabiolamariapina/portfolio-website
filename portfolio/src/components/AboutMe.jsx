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
            websites. My professional interests are tech policy, diversity and
            inclusion in tech, and social innovation and entrepreneurship.
          </p>
        </div>
      </div>
    );
  }
}
