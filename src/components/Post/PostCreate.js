import React, { Component } from 'react';
import {commitMutation, graphql} from 'react-relay';
import networkenv from '../../graphql/network'

const mutation = graphql`
  mutation PostCreateMutation(
    $input: PostInput!
  ) {
    createPost(input: $input) {
        title
        content
        authorId
    }
  }
`;

function createPost(e) {
    e.preventDefault();
    let title = e.target[0].value
    let content = e.target[1].value
    let authorId = e.target[2].value

    const variables = {
      input: {
        title,
        content,
        authorId
      },
    };
  
    commitMutation(
      networkenv,
      {
        mutation,
        variables,
        onCompleted: (response, errors) => {
          console.log('Response received from server.')
        },
        onError: err => console.error(err),
      },
    );
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

export default AuthorCreate