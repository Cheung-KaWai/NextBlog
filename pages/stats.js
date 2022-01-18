import React from "react";
import axios from "axios";
import Navbar from "../components/molecules/Navbar";
import styles from "../styles/Stats.module.scss";

// import the core library.
import ReactECharts from "echarts-for-react";

export async function getStaticProps() {
  const res = await axios.get(
    `https://still-escarpment-29927.herokuapp.com/api/blogs?populate=Category`
  );

  const cycling = { value: 0, name: "Cycling" };
  const running = { value: 0, name: "Running" };
  const tennis = { value: 0, name: "Tennis" };

  res.data.data.map((x) => {
    switch (x.attributes.Category.data.attributes.Name) {
      case "Cycling": {
        cycling.value += 1;
        break;
      }
      case "Running": {
        running.value += 1;
        break;
      }
      case "Tennis": {
        tennis.value += 1;
        break;
      }
    }
  });

  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Amount of Blog posts",
        data: [cycling, running, tennis],
        type: "pie",
        radius: ["40%", "70%"],
        label: {
          show: false,
          position: "center",
        },
      },
    ],
  };

  return {
    props: { option },
    revalidate: 5,
  };
}

export default function stats({ option }) {
  return (
    <div className={styles.styles}>
      <Navbar />
      <h1>Random Stats</h1>
      <ReactECharts option={option} className={styles.stats} />
    </div>
  );
}
