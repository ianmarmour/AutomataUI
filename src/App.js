import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Posts from "./components/Post/Posts";
import PostCreate from "./components/Post/PostCreateNew";
import Nav from "./components/Nav/Nav";
import Login from "./components/Login/Login";

function Home() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <Router>
      <Nav />

      <Route exact path="/" component={Posts} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/compose_post" component={PostCreate} />
    </Router>
  );
}

export default App;
