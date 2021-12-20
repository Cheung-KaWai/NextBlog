import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContextProvider";

export default function Home() {
  const context = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    context.setLoggedUser(undefined);
    router.push("/login");
  };

  return (
    <div>
      <p>{context.loggedUser && context.loggedUser.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
