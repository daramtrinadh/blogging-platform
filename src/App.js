import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog/:id' element={<BlogDetails />} />
      <Route path='/create-blog' element={<CreateBlog/>}/>
    </Routes>
  </Router>
);

export default App;
