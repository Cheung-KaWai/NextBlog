import React from "react";
import MarkdownIt from "markdown-it/lib";
import styles from "../../styles/Article.module.scss";
import LinkButton from "../atoms/LinkButton";
import Link from "next/link";

export default function Article({ post }) {
  const md = new MarkdownIt();
  const html = md.render(post.Content);
  return (
    <div className={styles.container}>
      <h1>{post.Title}</h1>
      <div className={styles.header}>
        <p>{post.createdAt.substring(0, 10)}</p>
        <Link href={`/accounts/${post.Author.data.id}`}>
          <a>{post.Author.data.attributes.username}</a>
        </Link>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className={styles.content}
      ></div>
      <LinkButton link="/blogs/pages/1" text="Back" back={true} />
      <div />
    </div>
  );
}
