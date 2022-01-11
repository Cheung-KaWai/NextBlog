import React from "react";
import Comment from "../molecules/Comment";

export default function ListComments({ data }) {
  return (
    <div>
      {data.slice(0, 3).map((x) => (
        <Comment comment={x.attributes}></Comment>
      ))}
    </div>
  );
}
