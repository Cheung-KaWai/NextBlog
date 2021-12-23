import React from "react";
import axios from "axios";
import Navbar from "../../../components/molecules/Navbar";
import PaginationMenu from "../../../components/molecules/PaginationMenu";
import ListBlogs from "../../../components/organisms/ListBlogs";
import styles from "../../../styles/Pagination.module.scss";

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
  const maxPages = res.data.meta.pagination.pageCount;

  // Pass post data to the page via props
  return { props: { post, currentPage: params.page, pageCount: maxPages } };
}

export default function Page({ post, currentPage, pageCount }) {
  return (
    <div className={styles.pageContainer}>
      <Navbar></Navbar>
      <h1>Latest Blog Posts</h1>
      <ListBlogs blogs={post} />
      <PaginationMenu pages={pageCount} currentPage={currentPage} />
    </div>
  );
}
