import React, { Component } from "react";
import { commitMutation, graphql } from "react-relay";
import networkenv from "../../graphql/network";

const mutation = graphql`
  mutation AuthorCreateMutation($input: authorInput!) {
    createAuthor(input: $input) {
      name
    }
  }
`;

function createAuthor(name) {
  const variables = {
    input: {
      name
    }
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
