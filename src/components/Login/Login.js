import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Bootstrap from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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
    this.httpGetAsync(
      "http://localhost:4000/login?username=amy&password=amyspassword",
      () => {
        console.log("Authenticated");
      }
    );
  };

  render() {
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
            <Button block disabled={!this.validateForm()} type="submit">
              Login
            </Button>
          </Form>
        </Col>
        <Col />
      </Container>
    );
  }
}
