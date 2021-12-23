import React from "react";
import axios from "axios";

export async function getStaticPaths() {
  const res = await axios.get(
    "https://still-escarpment-29927.herokuapp.com/api/blogs?pagination[page]=1&pagination[pageSize]=2"
  );
  const pagination = res.data.meta.pagination;

  let pages = [];
  for (let i = 1; i <= pagination.pageCount; i++) {
    pages.push({ params: { page: i.toString() } });
  }
  // const paths = { paths: pages };
  // console.log(paths);
  return { paths: pages, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `https://still-escarpment-29927.herokuapp.com/api/blogs?pagination[page]=${params.page}&pagination[pageSize]=2`
  );
  const post = res.data.data;

  // Pass post data to the page via props
  return { props: { post, currentPage: params.page } };
}

export default function Page({ post, currentPage }) {
  return (
    <div>
      {post.map((x, index) => (
        <p key={index}>{x.id}</p>
      ))}
      <p>current page,{currentPage}</p>
    </div>
  );
}
