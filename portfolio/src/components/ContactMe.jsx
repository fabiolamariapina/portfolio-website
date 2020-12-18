import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
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
          <Form className="contact-me">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email your email address"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-button">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
