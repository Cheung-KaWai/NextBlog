import { useRouter } from "next/router";
import React, { useContext } from "react";
import Navbar from "../../components/molecules/Navbar";
import { AuthContext } from "../../context/AuthContextProvider";
import styles from "../../styles/Account.module.scss";
import client from "../../apollo-client";
import { gql } from "@apollo/client";
import axios from "axios";
import AccountInfo from "../../components/molecules/AccountInfo";
import ReactECharts from "echarts-for-react";
import ListBlogsAccount from "../../components/organisms/ListBlogsAccount";

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        usersPermissionsUsers {
          data {
            id
          }
        }
      }
    `,
  });

  const paths = data.usersPermissionsUsers.data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `https://still-escarpment-29927.herokuapp.com/api/blogs?filters[Author][id][$eq]=${params.id}&populate=*`
  );
  const user = await axios.get(
    `https://still-escarpment-29927.herokuapp.com/api/users/${params.id}`
  );
  const comments = await axios.get(
    `https://still-escarpment-29927.herokuapp.com/api/comments?filters[UserId][id][$eq]=${params.id}`
  );
  const receceived = res.data.data.map(
    (x) => x.attributes.Comments.data.length
  );
  console.log(res.data.data);

  return {
    props: {
      blogscount: res.data.data.length,
      blogs: res.data.data,
      account: user.data,
      commentscount: comments.data.data.length,
      commentsReceived: receceived.reduce((a, b) => a + b, 0),
    },
  };
}

export default function Account({
  blogscount,
  account,
  commentscount,
  commentsReceived,
  blogs,
}) {
  const context = useContext(AuthContext);
  const router = useRouter();

  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };

  const handleLogout = () => {
    router.push("/login");
    window.localStorage.removeItem("user");
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    context.setLoggedUser(undefined);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* <ReactECharts
          option={option}
          // notMerge={true}
          // lazyUpdate={true}
          // theme={"theme_name"}
          // onChartReady={this.onChartReadyCallback}
          // onEvents={EventsDict}
          // opts={}
        /> */}

        <AccountInfo
          blogs={blogscount}
          account={account}
          comments={commentscount}
          received={commentsReceived}
        />

        <ListBlogsAccount blogs={blogs} />

        {context.loggedUser && context.loggedUser.id == account.id && (
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        )}
      </div>
    </>
  );
}
