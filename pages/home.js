import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import axios from "axios";

export async function getStaticProps() {
  // https://still-escarpment-29927.herokuapp.com/api/blogs
  // http://localhost:1337/api/blogs
  try {
    const res = await axios.get(
      "https://still-escarpment-29927.herokuapp.com/api/blogs"
    );
    return {
      props: { blogs: res.data.data },
    };
  } catch (e) {
    console.log(e.message);
  }
}

export default function Home({ blogs }) {
  const context = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    context.setLoggedUser(undefined);
    router.push("/login");
  };

  return (
    <div>
      <p>{context.loggedUser && context.loggedUser.username}</p>
      <button onClick={handleLogout}>Logout</button>
      {blogs.map((x, index) => (
        <p key={index}>{x.id}</p>
      ))}
    </div>
  );
}
