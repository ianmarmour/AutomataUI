import { Environment, Network, RecordSource, Store } from "relay-runtime";
import "regenerator-runtime/runtime";

import {
  RelayNetworkLayer,
  urlMiddleware,
  retryMiddleware,
  progressMiddleware
} from "react-relay-network-modern";
const API_ENDPOINT = "http://localhost:4000/graphql";

const network = new RelayNetworkLayer([
  urlMiddleware({
    url: "http://localhost:4000/graphql"
  }),
  retryMiddleware({
    fetchTimeout: 15000,
    retryDelays: attempt => Math.pow(2, attempt + 4) * 100, // or simple array [3200, 6400, 12800, 25600, 51200, 102400, 204800, 409600],
    beforeRetry: ({ forceRetry, abort, delay, attempt, lastError, req }) => {
      if (attempt > 10) abort();
      window.forceRelayRetry = forceRetry;
      console.log(
        "call `forceRelayRetry()` for immediately retry! Or wait " +
          delay +
          " ms."
      );
    },
    statusCodes: [500, 503, 504]
  }),
  progressMiddleware({
    onProgress: (current, total) => {
      console.log("Downloaded: " + current + " B, total: " + total + " B");
    }
  }),

  // example of the custom inline middleware
  next => async req => {
    req.fetchOpts.headers["Access-Control-Allow-Methods"] =
      "GET, POST, OPTIONS, PUT, PATCH, DELETE";
    req.fetchOpts.headers["Access-Control-Allow-Credentials"] = true;
    req.fetchOpts.headers["Access-Control-Allow-Origin"] =
      "http://localhost:4000";
    req.fetchOpts.credentials = "include"; // allow to send cookies (sending credentials to same domains)
    // req.fetchOpts.credentials = 'include'; // allow to send cookies for CORS (sending credentials to other domains)

    console.log("RelayRequest", req);

    const res = await next(req);
    console.log("RelayResponse", res);

    return res;
  }
]); // as second arg you may pass advanced options for RRNL

// Create a network layer from the fetch function
//const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

const environment = new Environment({
  network,
  store
});

export default environment;
