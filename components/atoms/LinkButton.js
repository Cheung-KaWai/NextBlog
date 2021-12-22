import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.scss";
import PlusImage from "./PlusImage";
import BackImage from "./BackImage";

export default function LinkButton({ text, link, back }) {
  return (
    <div className={styles.addPost}>
      <Link href={link}>
        <a>{text}</a>
      </Link>
      {!back && <PlusImage />}
      {back && <BackImage />}
    </div>
  );
}
