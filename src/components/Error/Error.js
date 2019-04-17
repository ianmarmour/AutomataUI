import React, { createElement, Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Error extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col />
          <Col>
            <div>Error trying to get content from GraphQL.</div>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default Error;
