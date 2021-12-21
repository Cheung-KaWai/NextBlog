import React, { useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContextProvider";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../styles/Auth.module.scss";
import Link from "next/link";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const context = useContext(AuthContext);
  const router = useRouter();

  const handleRegister = async (registerData) => {
    // https://still-escarpment-29927.herokuapp.com/api/auth/local/register
    // http://localhost:1337/api/auth/local/register
    try {
      setLoading(true);
      const response = await axios.post(
        "https://still-escarpment-29927.herokuapp.com/api/auth/local/register",
        registerData
      );
      window.localStorage.setItem("user", JSON.stringify(response.data.user));
      context.setLoggedUser(response.data.user);
      setLoading(false);
      router.push("/home");
    } catch (e) {
      setError(e.message);
    }
  };

  const registerValidation = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username length has to be at least 3")
      .required("Username cannot be empty"),
    email: Yup.string()
      .email("Must be email format")
      .required("Email cannot be empty"),
    password: Yup.string().required("Password cannot be empty"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={registerValidation}
      onSubmit={(values, { setSubmitting }) => {
        handleRegister(values);
        setSubmitting(false);
      }}
    >
      <Form className={styles.form}>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <Field id="username" name="username" className={styles.input} />
        <ErrorMessage name="username">
          {(msg) => <p className={styles.error}>{msg}</p>}
        </ErrorMessage>
        <label
          htmlFor="email"
          className={`${styles.label} ${styles.labelMargin}`}
        >
          Email
        </label>
        <Field type="email" id="email" name="email" className={styles.input} />
        <ErrorMessage name="email">
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
          {!loading && "Register"}
          {loading && "Bezig"}
        </button>
        <div className={styles.link}>
          <p>Already registerd?&nbsp;</p>
          <Link href="/login" replace>
            <a>Sign In</a>
          </Link>
        </div>
      </Form>
    </Formik>
  );
}
