/**
 * @flow
 * @relayHash f00a8a0e5576785304b1df5bc8700dc9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PostStream_posts$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +posts: ?$ReadOnlyArray<?{|
    +$fragmentRefs: PostStream_posts$ref
  |}>
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  posts {
    ...PostStream_posts
    id
  }
}

fragment PostStream_posts on Post {
  title
  content
  authorId
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "posts",
        "storageKey": null,
        "args": null,
        "concreteType": "Post",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PostStream_posts",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "posts",
        "storageKey": null,
        "args": null,
        "concreteType": "Post",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "content",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "authorId",
            "args": null,
            "storageKey": null
          },
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
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  posts {\n    ...PostStream_posts\n    id\n  }\n}\n\nfragment PostStream_posts on Post {\n  title\n  content\n  authorId\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'b1fcdbe5f08be10941797331918a83d4';
module.exports = node;
