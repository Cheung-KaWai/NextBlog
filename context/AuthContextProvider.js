import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(undefined);
  const [hidePosts, setHidePosts] = useState([]);

  const properties = {
    loggedUser,
    setLoggedUser,
    setHidePosts,
    hidePosts,
  };
  return (
    <AuthContext.Provider value={properties}>{children}</AuthContext.Provider>
  );
}
