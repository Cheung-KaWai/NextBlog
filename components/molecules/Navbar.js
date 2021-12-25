import React from "react";
import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";
import ProfileImage from "../../components/atoms/ProfileImage";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../../context/AuthContextProvider";
import { useRouter } from "next/router";

export default function Navbar() {
  const context = useContext(AuthContext);
  const router = useRouter();

  // const handleAccount = () => {
  //   if (context.loggedUser) {
  //     router.push(`/accounts/${context.loggedUser && context.loggedUser.id}`);
  //   }
  // };

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
      {context.loggedUser && <p>Test</p>}
      {/* <button onClick={handleAccount}>
        <ProfileImage />
      </button> */}
    </nav>
  );
}
