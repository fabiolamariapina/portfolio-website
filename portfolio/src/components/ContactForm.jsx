import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }
  render() {
    return (
      <div>
        <form
          className="contact-me"
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="message"
              rows="5"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
              placeholder="Message"
            ></textarea>
          </div>
          <Button id="submit-button" as="input" type="submit" value="Submit" />{" "}
        </form>
      </div>
    );
  }
}
