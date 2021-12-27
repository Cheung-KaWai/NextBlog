import React, { useContext } from "react";
import styles from "../../styles/Account.module.scss";
import CommentImage from "../atoms/CommentImage";
import Link from "next/link";
import { AuthContext } from "../../context/AuthContextProvider";

export default function LittlePostCard({ blog }) {
  const context = useContext(AuthContext);

  return (
    <Link href={`/blogs/${blog.id}`}>
      <a>
        <div className={styles.littleCard}>
          <p>{blog.attributes.Title}</p>
          <p>{blog.attributes.createdAt.substring(0, 10)}</p>
          <div>
            <CommentImage />
            <p>{blog.attributes.Comments.data.length}</p>
          </div>
          {context.loggedUser &&
            context.loggedUser.id === blog.attributes.Author.data.id && (
              <button>modify</button>
            )}

          {context.loggedUser &&
            context.loggedUser.id === blog.attributes.Author.data.id && (
              <button>delete</button>
            )}
        </div>
      </a>
    </Link>
  );
}
