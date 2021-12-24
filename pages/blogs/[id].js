import React from "react";
import axios from "axios";
import CommentForm from "../../components/organisms/CommentForm";
import Navbar from "../../components/molecules/Navbar";
import Article from "../../components/organisms/Article";
import styles from "../../styles/Article.module.scss";

import client from "../../apollo-client";
import { gql } from "@apollo/client";

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        blogs {
          data {
            id
          }
        }
      }
    `,
  });

  const paths = data.blogs.data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query ($id: ID) {
        blog(id: $id) {
          data {
            id
            attributes {
              Title
              Content
              createdAt
            }
          }
        }
      }
    `,
    variables: {
      id: params.id,
    },
  });

  // Pass post data to the page via props
  return { props: { post: data.blog.data } };
}

export default function Post({ post }) {
  return (
    <div>
      <Navbar />
      <Article post={post.attributes} />
      <div className={styles.commentDiv}>
        <CommentForm id={post.id} />
      </div>
    </div>
  );
}
