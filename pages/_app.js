import "../styles/globals.css";
import AuthContextProvider from "../context/AuthContextProvider";
import { useEffect } from "react";
import SetUserState from "../components/SetUserState";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <SetUserState>
        <Component {...pageProps} />
      </SetUserState>
    </AuthContextProvider>
  );
}

export default MyApp;
