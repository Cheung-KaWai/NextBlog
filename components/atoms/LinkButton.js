import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.scss";
import PlusImage from "./PlusImage";
import BackImage from "./BackImage";

export default function LinkButton({ text, link, back }) {
  return (
    <Link href={link}>
      <div className={styles.addPost}>
        <a>{text}</a>
        {!back && <PlusImage />}
        {back && <BackImage />}
      </div>
    </Link>
  );
}
