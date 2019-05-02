/**
 * @flow
 * @relayHash dd936237cbe3ed36f6769e748517c90c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PostCreateMutationVariables = {|
  title: string,
  author: string,
  content: string,
|};
export type PostCreateMutationResponse = {|
  +createPost: {|
    +title: string,
    +content: string,
    +author: string,
  |}
|};
export type PostCreateMutation = {|
  variables: PostCreateMutationVariables,
  response: PostCreateMutationResponse,
|};
*/


/*
mutation PostCreateMutation(
  $title: String!
  $author: String!
  $content: String!
) {
  createPost(title: $title, author: $author, content: $content) {
    title
    content
    author
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "title",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "author",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "content",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "author",
    "variableName": "author",
    "type": "String!"
  },
  {
    "kind": "Variable",
    "name": "content",
    "variableName": "content",
    "type": "String!"
  },
  {
    "kind": "Variable",
    "name": "title",
    "variableName": "title",
    "type": "String!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "content",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "author",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PostCreateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createPost",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Post",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PostCreateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createPost",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Post",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "PostCreateMutation",
    "id": null,
    "text": "mutation PostCreateMutation(\n  $title: String!\n  $author: String!\n  $content: String!\n) {\n  createPost(title: $title, author: $author, content: $content) {\n    title\n    content\n    author\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ecf32989fa077b33964a69e97f777459';
module.exports = node;
