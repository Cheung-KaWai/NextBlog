import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Auth.module.scss";

export default function LoadingAnimation() {
  const loadinContainerVariant = {
    start: {
      transition: {
        staggerChildren: 0.075,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.075,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  };

  const loadingCircleTransition = {
    repeat: Infinity,
    duration: 0.5,
    ease: "easeInOut",
  };

  return (
    <motion.div
      className={styles.animation}
      variants={loadinContainerVariant}
      initial="start"
      animate="end"
    >
      <motion.span
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
}
