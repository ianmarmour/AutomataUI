import React, { createElement, Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Post from "./Post";

class PostStream extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col />
          <Col xs={6}>
            <div className="PostsStream">
              {this.props.posts.map(post => (
                <Post
                  className="PostEntry"
                  date={post.date}
                  title={post.title}
                  content={post.content}
                />
              ))}
            </div>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

const PostStreamContainer = createFragmentContainer(PostStream, {
  posts: graphql`
    fragment PostStream_posts on Post @relay(plural: true) {
      id
      title
      content
      author
    }
  `
});

export default PostStreamContainer;
