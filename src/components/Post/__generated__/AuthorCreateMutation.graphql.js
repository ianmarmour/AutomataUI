/**
 * @flow
 * @relayHash fe4d6af85753d34cf766ec18d0648b00
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthorInput = {|
  name?: ?string
|};
export type AuthorCreateMutationVariables = {|
  input: AuthorInput
|};
export type AuthorCreateMutationResponse = {|
  +createAuthor: ?{|
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
  $input: AuthorInput!
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
    "type": "AuthorInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AuthorInput"
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
    "text": "mutation AuthorCreateMutation(\n  $input: AuthorInput!\n) {\n  createAuthor(input: $input) {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8c80047d8bf4e13a2b420f800051b426';
module.exports = node;
