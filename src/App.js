import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
