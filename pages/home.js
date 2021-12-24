import React from "react";
import axios from "axios";
import Navbar from "../components/molecules/Navbar";
import ListBlogs from "../components/organisms/ListBlogs";
import styles from "../styles/Home.module.scss";
import client from "../apollo-client";
import { gql } from "@apollo/client";

export async function getStaticProps() {
  // https://still-escarpment-29927.herokuapp.com/api/blogs
  // http://localhost:1337/api/blogs
  try {
    const res = await axios.get(
      "https://still-escarpment-29927.herokuapp.com/api/blogs"
    );

    const { data } = await client.query({
      query: gql`
        query Blogs {
          blogs {
            data {
              id
            }
          }
        }
      `,
    });

    console.log(data.blogs.data);

    return {
      props: { blogs: res.data.data },
      revalidate: 10,
    };
  } catch (e) {
    console.log(e.message);
  }

  console.log(data);
}

export default function Home({ blogs }) {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <h1>Latest Blog Posts</h1>
      <ListBlogs blogs={blogs} />
    </div>
  );
}
