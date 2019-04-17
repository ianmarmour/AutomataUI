/**
 * @flow
 * @relayHash 9cffad7ae5724dbdc17b2a02de643a32
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PostStream_posts$ref = any;
export type PostsQueryVariables = {||};
export type PostsQueryResponse = {|
  +posts: ?$ReadOnlyArray<?{|
    +$fragmentRefs: PostStream_posts$ref
  |}>
|};
export type PostsQuery = {|
  variables: PostsQueryVariables,
  response: PostsQueryResponse,
|};
*/


/*
query PostsQuery {
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
    "name": "PostsQuery",
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
    "name": "PostsQuery",
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
    "name": "PostsQuery",
    "id": null,
    "text": "query PostsQuery {\n  posts {\n    ...PostStream_posts\n    id\n  }\n}\n\nfragment PostStream_posts on Post {\n  title\n  content\n  authorId\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '4133794d5860695b3d6bc0044629019d';
module.exports = node;
