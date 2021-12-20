import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContextProvider";

export default function SetUserState({ children }) {
  const context = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (user) {
      context.setLoggedUser(JSON.parse(user));
      router.push("/home");
    } else {
      router.push("/login");
    }
  }, []);

  return children;
}
