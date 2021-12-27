import React from "react";
import styles from "../../styles/Account.module.scss";

export default function AccountInfo({ blogs, account, comments, received }) {
  return (
    <div className={styles.accountInfo}>
      <h1>{account.username}</h1>
      <div>
        <p>
          Joined <span>{account.createdAt.substring(0, 10)}</span>
        </p>
        <p>
          Blogs created <span>{blogs}</span>
        </p>
        <p>
          Comments posted <span>{comments} </span>
        </p>
        <p>
          Comments received <span>{received}</span>
        </p>
      </div>
    </div>
  );
}
