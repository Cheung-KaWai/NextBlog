import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  const context = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    context.setLoggedUser(undefined);
    router.push("/login");
  };

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        {/* <p>Welcome {context.loggedUser && context.loggedUser.username}</p> */}
        <Link href="/blogs/pages/1">
          <a>
            <img src="/logo.png" alt="website logo"></img>
          </a>
        </Link>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
