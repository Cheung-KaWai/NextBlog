import React from "react";
import PaginationLink from "../atoms/PaginationLink";
import styles from "../../styles/Pagination.module.scss";
import PaginationButton from "../atoms/PaginationButton";

export default function PaginationMenu({ currentPage, pages }) {
  const range = [...Array(pages - 1 + 1).keys()].map((x) => x + 1);

  return (
    <div className={styles.container}>
      <PaginationButton page={parseInt(currentPage) - 1} max={pages} />
      {range.map((x, index) => (
        <PaginationLink
          page={x}
          key={index}
          currentPage={currentPage}
        ></PaginationLink>
      ))}
      <PaginationButton
        next={true}
        page={parseInt(currentPage) + 1}
        max={pages}
      />
    </div>
  );
}
