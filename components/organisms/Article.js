import React from "react";
import MarkdownIt from "markdown-it/lib";
import styles from "../../styles/Article.module.scss";
import LinkButton from "../atoms/LinkButton";

export default function Article({ post }) {
  const md = new MarkdownIt();
  const html = md.render(post.Content);
  console.log(html);
  return (
    <div className={styles.container}>
      <h1>{post.Title}</h1>
      <p>{post.createdAt.substring(0, 10)}</p>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className={styles.content}
      ></div>
      <LinkButton link="/blogs/pages/1" text="Back" back={true} />
    </div>
  );
}
