import React from "react";
import { useSearchParams } from "react-router-dom";

const AllBlogs = ({ allBlogPosts }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sortOrder") || "asc";
  const sortField = searchParams.get("sortField") || "createdAt";

  function sortedBlogPosts(a, b) {
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
  }

  return (
    <div>
      <h1>All Blogs</h1>
      {allBlogPosts.sort(sortedBlogPosts).map((blog, index) => {
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

export default AllBlogs;
