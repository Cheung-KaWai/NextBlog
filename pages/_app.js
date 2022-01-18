import "../styles/globals.css";
import AuthContextProvider from "../context/AuthContextProvider";
import SetUserState from "../components/SetUserState";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <SetUserState>
        <Head>
          <link
            rel="shortcut icon"
            href="/fluent_sport-basketball-24-regular.svg"
            type="image/x-icon"
          />
        </Head>
        <Component {...pageProps} />
      </SetUserState>
    </AuthContextProvider>
  );
}

export default MyApp;
