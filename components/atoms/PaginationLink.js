import React from "react";
import Link from "next/link";
import styles from "../../styles/Pagination.module.scss";

export default function PaginationLink({ page, currentPage }) {
  return (
    <Link href={`/blogs/pages/${page}`}>
      <a
        className={`${
          page.toString() == currentPage ? styles.linkButton : ""
        } ${styles.number}`}
      >
        {page}
      </a>
    </Link>
  );
}
