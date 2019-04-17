import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Foo from "react-bootstrap/Nav";

class Nav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="navbar">
        <Navbar.Brand href="#home">Automata</Navbar.Brand>

        <Foo className="mr-auto">
          <Foo.Link href="/">{"Home"}</Foo.Link>
          <Foo.Link href="/login">{"Login"}</Foo.Link>
        </Foo>
      </Navbar>
    );
  }
}
export default Nav;
