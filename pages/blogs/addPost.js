import React from "react";
import AddPostForm from "../../components/organisms/AddPostForm";
import NavBar from "../../components/molecules/Navbar";
import styles from "../../styles/AddPost.module.scss";

function AddPost() {
  return (
    <>
      <NavBar />
      <h1 className={styles.title}>Add a new post</h1>
      <AddPostForm />
    </>
  );
}

export default AddPost;
