import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <nav className="Nav">
      <Link to="/">Home</Link>
      <Link to="/blogs">Blogs</Link>
    </nav>
  );
}
