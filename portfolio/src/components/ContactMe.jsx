import React, { Component } from "react";
import ContactForm from "./ContactForm";

export default class ContactMe extends Component {
  render() {
    return (
      <div className="contact-page">
        <h1 className="contact-me" id="contact-me-header">
          Contact Me
        </h1>
        <div className="contact-me-spiel">
          <p className="contact-me" id="contact-me-spiel-part-1">
            If you are interested in working with me or just want to chat,
            please email me at fabiolamariapina@yahoo.com. I am working on
            adding a functioning contact form for easier contacting.
          </p>
          {/* <ContactForm /> */}
        </div>
      </div>
    );
  }
}
