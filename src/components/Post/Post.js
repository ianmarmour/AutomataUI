import React, { Component } from "react";
import Media from "react-bootstrap/Media";
import { createFragmentContainer, graphql } from "react-relay";

class Post extends Component {
  render() {
    return (
      <Media>
        <Media.Body>
          <h1>{this.props.title}</h1>
          <p>{this.props.content}</p>
        </Media.Body>
      </Media>
    );
  }
}
export default Post;
