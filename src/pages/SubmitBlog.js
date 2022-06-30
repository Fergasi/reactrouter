import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { allBlogPosts } from "../utils/sampleBlogs";

const SubmitBlog = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  return (
    <div id="submit-form">
      <h1>Submit New Blog</h1>
      <br />
      <label>Blog Title</label>
      <input
        id="title"
        size="40"
        type="text"
        onChange={(e) => {
          const newTitle = e.target.value;
          setTitle(newTitle);
        }}
      />
      <br />
      <label>Blog Author</label>
      <input
        id="author"
        size="40"
        type="text"
        onChange={(e) => {
          const newAuthor = e.target.value;
          setAuthor(newAuthor);
        }}
      />
      <br />
      <label>Blog Text</label>
      <textarea
        id="text"
        size="300"
        type="text"
        onChange={(e) => {
          const newText = e.target.value;
          setText(newText);
        }}
      />
      <br />
      <button
        id="subButton"
        onClick={() => {
          const newBlog = {
            title: title,
            text: text,
            author: author,
            createdAt: new Date().toISOString(),
            id: allBlogPosts.length + 1,
          };
          allBlogPosts.push(newBlog);
          setTitle("");
          setText("");
          setAuthor("");
          navigate("/blogs");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitBlog;
