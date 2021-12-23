import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContextProvider";
import axios from "axios";
import { useRouter } from "next/router";

export default function CommentForm({ id }) {
  const context = useContext(AuthContext);
  const router = useRouter();

  return (
    <div>
      <h2>Leave a comment </h2>
      <Formik
        initialValues={{ Comment: "" }}
        validationSchema={Yup.object({
          Comment: Yup.string()
            .max(100, "Must be 100 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const data = {
            data: {
              ...values,
              Writer: context.loggedUser.username,
              Blog: id,
            },
          };

          console.log(data.data);

          const cookie = document.cookie;
          const jwt = cookie.split("=")[1];
          const config = {
            headers: {
              "Content-type": "application/json",
              Authorization: jwt,
            },
          };

          axios
            .post(
              "https://still-escarpment-29927.herokuapp.com/api/comments",
              data,
              config
            )
            .then((response) => router.push("/home"))
            .catch((error) => console.log(error));
          setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="comment">Comment</label>
          <Field name="Comment" id="comment" as="textarea" />
          <ErrorMessage name="Comment">{(msg) => <p>{msg}</p>}</ErrorMessage>
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
}
