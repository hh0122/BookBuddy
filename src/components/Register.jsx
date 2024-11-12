import React, { useState } from "react";
import { registerUser } from "../api/api";

const Register = () => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = { firstName, lastName, email, password };
    try {
      const response = await registerUser(userData);
      if (response.message === 'Registration successful') {
        console.log('Registration successful!');
      } else {
        console.error('Registration failed:', response.message);
      }
    } catch (error) {
      console.error('An error occurred during registration:', error);
    }
  };

  return (
    <div className="page-container">
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              id="firstname"
              value={firstName}
              onChange={(event) => setFirstname(event.target.value)}
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              value={lastName}
              onChange={(event) => setLastname(event.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
          </div>
          <button type="submit">Register New Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
