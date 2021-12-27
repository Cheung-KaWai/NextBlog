import React, { useContext } from "react";
import styles from "../../styles/Account.module.scss";
import CommentImage from "../atoms/CommentImage";
import Link from "next/link";
import { AuthContext } from "../../context/AuthContextProvider";
import axios from "axios";

export default function LittlePostCard({ blog, hidePostsHandler }) {
  const context = useContext(AuthContext);

  const handleDelete = async (e, id) => {
    e.preventDefault();
    const cookie = document.cookie;
    const jwt = cookie.split("=")[1];
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: jwt,
      },
    };
    const data = await axios.delete(
      `https://still-escarpment-29927.herokuapp.com/api/blogs/${id}`,
      config
    );
    console.log(data.data);
    hidePostsHandler((prev) => [...prev, data.data.data.id]);
  };

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
              <button onClick={(e) => handleDelete(e, blog.id)}>delete</button>
            )}
        </div>
      </a>
    </Link>
  );
}
