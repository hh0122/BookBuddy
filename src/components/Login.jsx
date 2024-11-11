import React from "react";
import { useState } from "react";
import { loginUser } from "../api/api";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');
  const handleSubmit = async(event) => {
    event.preventDefault();
    const credentials = {email, password}
    
    return (
      <>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
        <input type = "email" value={email}></input>
        </label> 
        <label>
          Password:
        <input type = "Password" value={password}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
}

export default Login