/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PostStream_posts$ref: FragmentReference;
export type PostStream_posts = $ReadOnlyArray<{|
  +id: string,
  +title: string,
  +content: string,
  +author: string,
  +$refType: PostStream_posts$ref,
|}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PostStream_posts",
  "type": "Post",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
      "name": "author",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'eff3ef76eee441325bc1c90efe83d792';
module.exports = node;
