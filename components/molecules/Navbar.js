import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import styles from "../../styles/Navbar.module.scss";

export default function Navbar() {
  const context = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    context.setLoggedUser(undefined);
    router.push("/login");
  };

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        {/* <p>Welcome {context.loggedUser && context.loggedUser.username}</p> */}
        <img src="/logo.png"></img>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
