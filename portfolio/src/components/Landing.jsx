import React, { Component } from "react";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1 className="greeting">Hello,</h1>
        <img className="headshot" src="/images/headshot.jpg" alt="headshot" />
        <h3 className="tag-line">
          I am a <br></br>
          software engineer who <br></br>
          seeks to create user-friendly <br></br>
          apps and websites.
        </h3>
      </div>
    );
  }
}
