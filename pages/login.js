import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContextProvider";

export default function Login() {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [error, setError] = useState(undefined);

  const context = useContext(AuthContext);
  const router = useRouter();

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
      window.localStorage.setItem("user", JSON.stringify(response.data.user));
      context.setLoggedUser(response.data.user);
      router.push("/home");
    } catch (e) {
      setError(e.message);
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
    </>
  );
}
