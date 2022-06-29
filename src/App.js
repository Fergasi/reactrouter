import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import { Route, Routes } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import AllBlogs from "./components/AllBlogs";
import { allBlogPosts } from "./utils/sampleBlogs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />}>
            <Route path="" element={<AllBlogs allBlogPosts={allBlogPosts} />} />
            <Route
              path=":blogId"
              element={<BlogPost allBlogPosts={allBlogPosts} />}
            />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
