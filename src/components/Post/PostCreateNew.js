import React, { Component } from "react";
import ReactQuill from "react-quill"; // ES6
import Container from "react-bootstrap/Container";

class PostCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image"],
      ["clean"]
    ]
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image"
  ];

  render() {
    return (
      <Container className="flexbox-container-quill">
        <ReactQuill
          modules={this.modules}
          formats={this.formats}
          value={this.state.text}
          onChange={this.handleChange}
        />
      </Container>
    );
  }
}

export default PostCreate;
