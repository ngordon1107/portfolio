import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About.js";

const App = () => {
  return (
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={About}></Route>
    </Routes>
  </Router>
  );
}

export default App;
