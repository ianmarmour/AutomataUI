/**
 * @flow
 * @relayHash 4c38ca43ac48014aa7495b2f0f3ba596
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthorCreateMutationVariables = {|
  name: string
|};
export type AuthorCreateMutationResponse = {|
  +createAuthor: {|
    +name: string
  |}
|};
export type AuthorCreateMutation = {|
  variables: AuthorCreateMutationVariables,
  response: AuthorCreateMutationResponse,
|};
*/


/*
mutation AuthorCreateMutation(
  $name: String!
) {
  createAuthor(name: $name) {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name",
    "type": "String!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AuthorCreateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createAuthor",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Author",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AuthorCreateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createAuthor",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Author",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "name": "AuthorCreateMutation",
    "id": null,
    "text": "mutation AuthorCreateMutation(\n  $name: String!\n) {\n  createAuthor(name: $name) {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'faa44a09f1e30b12f188ba6ad86c7776';
module.exports = node;
