import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [jwt, setJwt] = useState(undefined);
  const [error, setError] = useState(undefined);

  const handleLogin = async (event) => {
    // https://still-escarpment-29927.herokuapp.com/api/auth/local
    // http://localhost:1337/api/auth/local
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://still-escarpment-29927.herokuapp.com/api/auth/local",
        {
          identifier: email,
          password: password,
        }
      );
      setJwt(response.data.jwt);
    } catch (e) {
      setError("No user account found");
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <p>{error}</p>
      <p>{jwt}</p>
    </>
  );
}
