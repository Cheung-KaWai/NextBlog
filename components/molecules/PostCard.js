import React from "react";
import Link from "next/link";
import styles from "../../styles/PostCard.module.scss";

export default function PostCard({ data, id }) {
  return (
    <article className={styles.article}>
      <Link href={`/blogs/${id}`}>
        <a>
          <h2>{data.Title}</h2>
          <div className={styles.header}>
            <p>{data.createdAt.substring(0, 10)}</p>
            <p>{data.Author.data.attributes.username}</p>
          </div>
          <p className={styles.summary}>{data.Summary}</p>
        </a>
      </Link>
    </article>
  );
}
