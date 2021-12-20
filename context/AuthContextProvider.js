import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(undefined);

  const properties = {
    loggedUser,
    setLoggedUser,
  };
  return (
    <AuthContext.Provider value={properties}>{children}</AuthContext.Provider>
  );
}
