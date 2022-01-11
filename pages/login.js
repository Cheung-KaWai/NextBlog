import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContextProvider";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../styles/Auth.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Login() {
  const [error, setError] = useState(undefined);
  const [loading, setloading] = useState(false);

  const context = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = async (loginData) => {
    try {
      setloading(true);
      const response = await axios.post(
        "https://still-escarpment-29927.herokuapp.com/api/auth/local",
        loginData
      );
      window.localStorage.setItem("user", JSON.stringify(response.data.user));
      document.cookie = `jwt = Bearer ${response.data.jwt};secure`;
      context.setLoggedUser(response.data.user);
      setloading(false);
      router.push("/blogs/pages/1");
    } catch (e) {
      setError(e.message);
    }
  };

  const loginValidation = Yup.object().shape({
    identifier: Yup.string()
      .email("Must be email format")
      .required("Email cannot be empty"),
    password: Yup.string().required("Password cannot be empty"),
  });

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
    <>
      <Formik
        initialValues={{
          identifier: "",
          password: "",
        }}
        validationSchema={loginValidation}
        onSubmit={(values, { setSubmitting }) => {
          handleLogin(values);
          setSubmitting(false);
        }}
      >
        <Form className={styles.form}>
          <label htmlFor="identifier" className={styles.label}>
            Email
          </label>
          <Field
            type="email"
            id="identifier"
            name="identifier"
            className={styles.input}
          />
          <ErrorMessage name="identifier">
            {(msg) => <p className={styles.error}>{msg}</p>}
          </ErrorMessage>
          <label
            htmlFor="password"
            className={`${styles.label} ${styles.labelMargin}`}
          >
            Password
          </label>
          <Field
            type="password"
            id="password"
            name="password"
            className={styles.input}
          />
          <ErrorMessage name="password">
            {(msg) => <p className={styles.error}>{msg}</p>}
          </ErrorMessage>
          <button type="submit" className={styles.button}>
            Login
          </button>
          {loading && (
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
          )}

          <div className={styles.link}>
            <p>No account yet?&nbsp;</p>
            <Link href="/register" replace>
              <a>Sign Up</a>
            </Link>
          </div>
        </Form>
      </Formik>
    </>
  );
}
