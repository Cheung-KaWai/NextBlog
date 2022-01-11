import React from "react";
import AddPostForm from "../../components/organisms/AddPostForm";
import NavBar from "../../components/molecules/Navbar";
import styles from "../../styles/AddPost.module.scss";
import axios from "axios";

export async function getStaticProps() {
  const res = await axios.get(
    `https://still-escarpment-29927.herokuapp.com/api/categories`
  );
  const categories = res.data.data;

  return { props: { categories } };
}

function AddPost({ categories }) {
  return (
    <>
      <NavBar />
      <h1 className={styles.title}>Add a new post</h1>
      <AddPostForm categories={categories} />
    </>
  );
}

export default AddPost;
