import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = ({ allBlogPosts }) => {
  const params = useParams();
  const blog = allBlogPosts.find((blog) => blog.id === Number(params.blogId));

  return (
    <>
      <h1>Search Results</h1>
      <div className="post">
        <p>Title: {blog.title}</p>
        <p className="text">{blog.text}</p>
        <p>Author: {blog.author}</p>
        <p className="text">{blog.createdAt}</p>
        <p className="text">ID: {blog.id}</p>
      </div>
    </>
  );
};

export default BlogPost;
