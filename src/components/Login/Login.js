import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Bootstrap from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Auth } from "aws-amplify";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmationcode: "",
      isAwaitingConfirmation: false
    };
  }

  httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.withCredentials = true;
    xmlHttp.send();
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state);
    if (this.state.submission === "signup") {
      Auth.signUp({
        username: this.state.email,
        password: this.state.password,
        attributes: {
          email: "ianmarmour@gmail.com"
        }
      });
    } else if (this.state.submission == "confirm") {
      // After retrieving the confirmation code from the user
      Auth.confirmSignUp(this.state.email, this.state.confirmationcode, {
        // Optional. Force user confirmation irrespective of existing alias. By default set to True.
        forceAliasCreation: true
      })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    } else {
      Auth.signIn(this.state.email, this.state.password)
        .then(success => console.log("successful sign in"))
        .catch(err => {
          this.setState({
            // isAwaitingConfirmation: true
          });
        });
    }
  };

  render() {
    const isAwaitingConfirmation = this.state.isAwaitingConfirmation;

    return (
      <Container className="flexbox-container-login">
        <Col />
        <Col>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>

              <Form.Control
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </Form.Group>
            {isAwaitingConfirmation ? (
              <Form.Group controlId="confirmationcode">
                <Form.Label>Confirmation Code</Form.Label>
                <Form.Control
                  value={this.state.confirmationcode}
                  onChange={this.handleChange}
                  type="confirmationcode"
                />
              </Form.Group>
            ) : (
              <div />
            )}
            <Button
              value="login"
              block
              onClick={() => {
                this.setState({
                  submission: "login"
                });
              }}
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>
            <Button
              value="signup"
              block
              onClick={() => {
                this.setState({
                  submission: "signup"
                });
              }}
              disabled={!this.validateForm()}
              type="submit"
            >
              Sign Up
            </Button>
            {isAwaitingConfirmation ? (
              <Button
                value="signup"
                block
                onClick={() => {
                  this.setState({
                    submission: "confirm"
                  });
                }}
                disabled={!this.validateForm()}
                type="submit"
              >
                Confirm Sign Up
              </Button>
            ) : (
              <div />
            )}
          </Form>
        </Col>
        <Col />
      </Container>
    );
  }
}
