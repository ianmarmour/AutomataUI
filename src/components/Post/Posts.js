import React, { Component } from "react";
import PostStream from "./PostStream";
import Error from "../Error/Error";
import { QueryRenderer, ErrorView, graphql } from "react-relay";
import networkenv from "../../graphql/network";

const environment = networkenv;

class Posts extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query PostsQuery {
            posts {
              ...PostStream_posts
            }
          }
        `}
        render={({ error, props }) => {
          if (error) {
            return <Error />;
          } else if (props) {
            return <PostStream posts={props.posts} />;
          } else {
            return <div>Loading</div>;
          }
        }}
      />
    );
  }
}

export default Posts;
