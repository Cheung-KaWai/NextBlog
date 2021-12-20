import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [userName, setUserName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [error, setError] = useState(undefined);
  const handleRegister = async (event) => {
    // https://still-escarpment-29927.herokuapp.com/api/auth/local/register
    // http://localhost:1337/api/auth/local/register
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://still-escarpment-29927.herokuapp.com/api/auth/local/register",
        {
          username: userName,
          email: email,
          password: password,
        }
      );
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <form onSubmit={handleRegister}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <p>{error}</p>
    </>
  );
}
