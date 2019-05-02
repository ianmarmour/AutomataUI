import React, { Component } from "react";
import { commitMutation, graphql } from "react-relay";
import networkenv from "../../graphql/network";

const mutation = graphql`
  mutation AuthorCreateMutation($name: String!) {
    createAuthor(name: $name) {
      name
    }
  }
`;

function createAuthor(authorName) {
  const variables = {
    name: authorName
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
      <form>
        <input type="text" id="author" name="Author Name" />
        <input type="submit" onClick={createAuthor("Ian")} value="Submit" />
      </form>
    );
  }
}

export default AuthorCreate;
