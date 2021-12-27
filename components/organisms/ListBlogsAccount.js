import React from "react";
import LittlePostCard from "../molecules/LittlePostCard";
import styles from "../../styles/Account.module.scss";

export default function ListBlogsAccount({ blogs }) {
  return (
    <div className={styles.postContainer}>
      {blogs &&
        blogs.map((x, index) => <LittlePostCard blog={x} key={index} />)}
    </div>
  );
}
