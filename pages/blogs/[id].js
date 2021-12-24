import React from "react";
import axios from "axios";
import CommentForm from "../../components/organisms/CommentForm";
import Navbar from "../../components/molecules/Navbar";
import Article from "../../components/organisms/Article";
import styles from "../../styles/Article.module.scss";

export async function getStaticPaths() {
  // https://still-escarpment-29927.herokuapp.com/api/blogs
  // http://localhost:1337/api/blogs
  const res = await axios.get(
    "https://still-escarpment-29927.herokuapp.com/api/blogs"
  );
  const posts = res.data.data;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // https://still-escarpment-29927.herokuapp.com/api/blogs
  // http://localhost:1337/api/blogs
  const res = await axios.get(
    `https://still-escarpment-29927.herokuapp.com/api/blogs/${params.id}?populate=*`
  );
  const post = res.data.data;

  // Pass post data to the page via props
  return { props: { post } };
}

export default function Post({ post }) {
  return (
    <div>
      <Navbar />
      <Article post={post.attributes} />
      <div className={styles.commentDiv}>
        <CommentForm id={post.id} />
      </div>
    </div>
  );
}
