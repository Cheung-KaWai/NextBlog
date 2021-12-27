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
            <Link href={`/accounts/${data.Author.data.id}`}>
              <a>{data.Author.data.attributes.username}</a>
            </Link>
          </div>
          <p className={styles.summary}>{data.Summary}</p>
        </a>
      </Link>
    </article>
  );
}
