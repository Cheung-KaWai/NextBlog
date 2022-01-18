import React from "react";
import Comment from "../molecules/Comment";

export default function ListComments({ data }) {
  return (
    <div>
      {data.map((x, index) => (
        <Comment key={index} comment={x.attributes}></Comment>
      ))}
    </div>
  );
}
