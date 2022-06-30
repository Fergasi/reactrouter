import React from "react";
import { useSearchParams } from "react-router-dom";

const SubmitBlogs = ({ allBlogPosts }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sortOrder") || "asc";
  const sortField = searchParams.get("sortField") || "createdAt";
  const limit = Number(searchParams.get("limit")) || 10;
  const page = Number(searchParams.get("page")) || 0;

  const sortedBlogPosts = (a, b) => {
    if (sortOrder.toLowerCase() === "asc") {
      if (a[sortField] < b[sortField]) {
        return -1;
      }
      if (a[sortField] > b[sortField]) {
        return 1;
      }
    }
    if (sortOrder.toLowerCase() === "desc") {
      if (a[sortField] < b[sortField]) {
        return 1;
      }
      if (a[sortField] > b[sortField]) {
        return -1;
      }
    }
    return 0;
  };

  //   const limitAndPage = (arr) => {
  //     var chunk = [];
  //     var i = page * limit;
  //     var n = i + limit;

  //     chunk = arr.slice(i, n);

  //     return chunk;
  //   };

  const blogsToDisplay = allBlogPosts
    .sort(sortedBlogPosts)
    .slice(page * limit, page * limit + limit);

  //   const blogsToDisplay = limitAndPage(sortedBlogsCopy);

  return (
    <div>
      <h1>All Blogs</h1>
      {blogsToDisplay.map((blog, index) => {
        return (
          <div className="multiPost" key={index}>
            <p>Title: {blog.title}</p>
            <p className="text">{blog.text}</p>
            <p>Author: {blog.author}</p>
            <p className="text">Created: {blog.createdAt}</p>
            <p className="text">ID: {blog.id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SubmitBlogs;
