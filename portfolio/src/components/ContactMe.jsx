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
            please fill out the form. I will get back within the next 24-48
            hours.
          </p>
          <ContactForm />
        </div>
      </div>
    );
  }
}
