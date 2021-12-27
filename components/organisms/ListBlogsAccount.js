import React, { useState, useEffect } from "react";
import LittlePostCard from "../molecules/LittlePostCard";
import styles from "../../styles/Account.module.scss";

export default function ListBlogsAccount({ blogs }) {
  const [hidePosts, setHidePosts] = useState([]);

  useEffect(() => {
    console.log(hidePosts);
  }, [hidePosts]);

  return (
    <div className={styles.postContainer}>
      {blogs &&
        blogs.map((x, index) => {
          if (!hidePosts.includes(x.id)) {
            return (
              <LittlePostCard
                blog={x}
                key={index}
                hidePostsHandler={setHidePosts}
              />
            );
          }
        })}
    </div>
  );
}
