import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Auth.module.scss";

export default function LoadingAnimation() {
  const loadinContainerVariant = {
    start: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
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
    duration: 0.4,
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
