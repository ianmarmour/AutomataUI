/**
 * @flow
 * @relayHash 27d486d203ce859c46438d0a158fa727
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type authorInput = {|
  email?: ?string,
  name?: ?string,
|};
export type AuthorCreateMutationVariables = {|
  input: authorInput
|};
export type AuthorCreateMutationResponse = {|
  +createAuthor: {|
    +name: ?string
  |}
|};
export type AuthorCreateMutation = {|
  variables: AuthorCreateMutationVariables,
  response: AuthorCreateMutationResponse,
|};
*/


/*
mutation AuthorCreateMutation(
  $input: authorInput!
) {
  createAuthor(input: $input) {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "authorInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "authorInput"
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
    "text": "mutation AuthorCreateMutation(\n  $input: authorInput!\n) {\n  createAuthor(input: $input) {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e539d1e4948dde87b0bb125393dd4dff';
module.exports = node;
