import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookList from "./components/BookList";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import BookDetails from "./components/BookDetail";
import './index.css'
function App() {
  return (
    <>
      <Router>
      <nav>
        <Link to ="/">Home</Link>
        <Link to ="/booklist">Book List</Link>
        <Link to ="/login">Log In</Link>
        <Link to ="/register">Register</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails/>} />                            
          <Route path="/login" element= {<Login/>} />
          <Route path="/register" element= {<Register/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
