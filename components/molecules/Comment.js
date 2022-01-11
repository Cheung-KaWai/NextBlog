import React from "react";
import styles from "../../styles/Comments.module.scss";

export default function Comment({ comment }) {
  return (
    <div className={styles.container}>
      <p>{comment.Comment}</p>
      <div>
        <p>{comment.createdAt.substring(0, 10)}</p>
        <p>{comment.UserId.data.attributes.username}</p>
      </div>
    </div>
  );
}
