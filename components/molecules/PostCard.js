import React from "react";
import Link from "next/link";
import styles from "../../styles/PostCard.module.scss";
import TennisImage from "../atoms/TennisImage";
import CyclingImage from "../atoms/CyclingImage";
import RunningImage from "../atoms/RunningImage";

export default function PostCard({ data, id }) {
  return (
    <article className={styles.article}>
      <Link href={`/blogs/${id}`}>
        <a>
          <div className={styles.header}>
            <h2>{data.Title}</h2>
            {data.Category.data.attributes.Name === "Cycling" && (
              <CyclingImage />
            )}
            {data.Category.data.attributes.Name === "Running" && (
              <RunningImage />
            )}
            {data.Category.data.attributes.Name === "Tennis" && <TennisImage />}
          </div>

          <img src={data.Photo.data.attributes.formats.small?.url} alt="" />
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
