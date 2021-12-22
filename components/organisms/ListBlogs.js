import React from "react";
import LinkButton from "../atoms/LinkButton";
import PostCard from "../molecules/PostCard";
import styles from "../../styles/Home.module.scss";

export default function ListBlogs({ blogs }) {
  return (
    <div className={styles.blogsContainer}>
      <LinkButton text="Add new post" link="/blogs/addPost"></LinkButton>
      {blogs.map((x, index) => (
        <PostCard key={index} data={x.attributes} id={x.id}>
          {x.id}
        </PostCard>
      ))}
    </div>
  );
}
