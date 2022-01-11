import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContextProvider";

export default function SetUserState({ children }) {
  const context = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const user = window.localStorage.getItem("user");

    if (router.pathname === "/") return;

    if (user) {
      if (router.pathname === "/login" || router.pathname === "/register") {
        router.push("/blogs/pages/1");
      }
      context.setLoggedUser(JSON.parse(user));
    } else {
      router.push("/login");
    }
  }, []);

  return children;
}
