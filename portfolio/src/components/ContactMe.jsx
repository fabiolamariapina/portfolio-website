import React, { Component } from "react";
import Button from "react-bootstrap/Button";

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
          <form
            className="contact-me"
            id="contact-form"
            // onSubmit={this.handleSubmit.bind(this)}
            // method="POST"
          >
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>
            <Button
              id="submit-button"
              as="input"
              type="submit"
              value="Submit"
            />{" "}
          </form>
        </div>
      </div>
    );
  }
}
