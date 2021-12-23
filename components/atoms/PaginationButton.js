import React from "react";
import ButtonImage from "./ButtonImage";
import styles from "../../styles/Pagination.module.scss";
import Link from "next/link";

export default function PaginationButton({ next, page, max }) {
  const url = page > max ? 1 : page < 1 ? max : page;

  return (
    <Link href={`/blogs/pages/${url}`}>
      <a className={styles.buttonContainer}>
        <div className={`${styles.button} ${next ? styles.next : ""}`}>
          <ButtonImage />
        </div>
      </a>
    </Link>
  );
}
