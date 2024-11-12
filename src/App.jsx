import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookList from "./components/BookList";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import BookDetails from "./components/BookDetail";
import UserAccount from "./components/UserAccount";
import { getUserDetails } from "./api/api";
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      fetchUserDetails();
    }
  }, []);

  const fetchUserDetails = async () => {
    try {
      const userDetails = await getUserDetails();
      setUser(userDetails);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/booklist">Book List</Link>
        {isAuthenticated ? (
          <>
            <Link to="/account">My Account</Link>
            <button onClick={() => {
              localStorage.removeItem('token');
              setIsAuthenticated(false);
              setUser(null);
            }}>Log Out</button>
          </>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails isAuthenticated={isAuthenticated} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<UserAccount user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
