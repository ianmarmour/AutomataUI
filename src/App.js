import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Posts from "./components/Post/Posts";
import PostCreate from "./components/Post/PostCreateNew";
import Nav from "./components/Nav/Nav";
import Login from "./components/Login/Login";
import Amplify from "aws-amplify";
Amplify.Logger.LOG_LEVEL = "DEBUG";

Amplify.configure({
  Auth: {
    identityPoolId: "us-west-2:6d13fb0c-9b66-4478-af71-5da711e081be",
    userPoolId: "us-west-2_HQQi20xli",
    userPoolWebClientId: "7apuh7u7rb6iearfemt3gjikkt",
    // REQUIRED - Amazon Cognito Region
    region: "us-west-2",
    // OPTIONAL - Configuration for cookie storage
    // Note: if the secure flag is set to true, then the cookie transmission requires a secure
    cookieStorage: {
      // REQUIRED - Cookie domain (only required if cookieStorage is provided)
      domain: "localhost",
      // OPTIONAL - Cookie path
      path: "/",
      // OPTIONAL - Cookie expiration in days
      expires: 365,
      // OPTIONAL - Cookie secure flag
      // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
      secure: false
    }
  }
});
function Home() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <Router>
      <Nav />

      <Route exact path="/" component={Posts} />
      <Route path="/login*" component={Login} />
      <Route exact path="/compose_post" component={PostCreate} />
    </Router>
  );
}

export default App;
