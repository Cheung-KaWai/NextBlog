import React from "react";
import PostCard from "../molecules/PostCard";

export default function ListBlogs({ blogs }) {
  return (
    <div>
      {blogs.map((x, index) => (
        <PostCard key={index} data={x.attributes} id={x.id}>
          {x.id}
        </PostCard>
      ))}
    </div>
  );
}
