import React from "react";
import styles from "../../styles/Auth.module.scss";

export default function ErrorComp({ error }) {
  return (
    <div className={styles.notFound}>
      <p>{error}</p>
    </div>
  );
}
