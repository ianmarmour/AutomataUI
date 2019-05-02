import React, { Component } from "react";
import { commitMutation, graphql } from "react-relay";
import networkenv from "../../graphql/network";

const mutation = graphql`
  mutation PostCreateMutation(
    $title: String!
    $author: String!
    $content: String!
  ) {
    createPost(title: $title, author: $author, content: $content) {
      title
      content
      author
    }
  }
`;

function createPost(e) {
  e.preventDefault();
  let inputTitle = e.target[0].value;
  let inputContent = e.target[1].value;
  let inputAuthor = e.target[2].value;

  const variables = {
    title: inputTitle,
    author: inputAuthor,
    content: inputContent
  };

  commitMutation(networkenv, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log("Response received from server.");
    },
    onError: err => console.error(err)
  });
}

class AuthorCreate extends Component {
  render() {
    return (
      <form onSubmit={createPost}>
        <input type="text" id="author" name="title" />
        <input type="text" id="author" name="Content" />
        <input type="text" id="author" name="AuthorId" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AuthorCreate;
