/**
 * @flow
 * @relayHash f2032dba3b962ec2853315e10bafac0d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PostInput = {|
  title?: ?string,
  content?: ?string,
  authorId: string,
|};
export type PostCreateMutationVariables = {|
  input: PostInput
|};
export type PostCreateMutationResponse = {|
  +createPost: ?{|
    +title: ?string,
    +content: ?string,
    +authorId: string,
  |}
|};
export type PostCreateMutation = {|
  variables: PostCreateMutationVariables,
  response: PostCreateMutationResponse,
|};
*/


/*
mutation PostCreateMutation(
  $input: PostInput!
) {
  createPost(input: $input) {
    title
    content
    authorId
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "PostInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "PostInput"
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
  "name": "authorId",
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
    "text": "mutation PostCreateMutation(\n  $input: PostInput!\n) {\n  createPost(input: $input) {\n    title\n    content\n    authorId\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '198c9d8f3a270aac2ccd99f19681a903';
module.exports = node;
