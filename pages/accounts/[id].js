import { useRouter } from "next/router";
import React, { useContext } from "react";
import Navbar from "../../components/molecules/Navbar";
import { AuthContext } from "../../context/AuthContextProvider";
import styles from "../../styles/Account.module.scss";
import client from "../../apollo-client";
import { gql } from "@apollo/client";
import axios from "axios";
import AccountInfo from "../../components/molecules/AccountInfo";

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        usersPermissionsUsers {
          data {
            id
          }
        }
      }
    `,
  });

  const paths = data.usersPermissionsUsers.data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `https://still-escarpment-29927.herokuapp.com/api/blogs?filters[Author][id][$eq]=${params.id}`
  );
  const user = await axios.get(
    `https://still-escarpment-29927.herokuapp.com/api/users/${params.id}`
  );

  return {
    props: {
      blogscount: res.data.data.length,
      account: user.data,
    },
  };
}

export default function Account({ blogscount, account }) {
  const context = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
    window.localStorage.removeItem("user");
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    context.setLoggedUser(undefined);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <AccountInfo blogs={blogscount} account={account} />
        {context.loggedUser && context.loggedUser.id == account.id && (
          <button onClick={handleLogout} className={styles.button}>
            Logout
          </button>
        )}
      </div>
    </>
  );
}
