import React, { useContext } from "react";
import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";
import ProfileImage from "../../components/atoms/ProfileImage";
import { AuthContext } from "../../context/AuthContextProvider";

export default function Navbar() {
  const context = useContext(AuthContext);

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

      <div className={styles.containerLinks}>
        <Link href={"/stats"}>
          <a>Stats</a>
        </Link>

        <Link href={`/accounts/${context.loggedUser && context.loggedUser.id}`}>
          <a>
            <ProfileImage />
          </a>
        </Link>
      </div>
    </nav>
  );
}
