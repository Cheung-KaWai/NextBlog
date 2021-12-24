import React from "react";
import MarkdownIt from "markdown-it/lib";
import styles from "../../styles/Article.module.scss";

export default function Article({ post }) {
  const md = new MarkdownIt();
  const html = md.render(post.Content);
  console.log(html);
  return (
    <div className={styles.container}>
      <h1>{post.Title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}
