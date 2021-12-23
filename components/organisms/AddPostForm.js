import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEditor, EditorContent } from "@tiptap/react";
import Menubar from "../../components/molecules/Menubar";
import StarterKit from "@tiptap/starter-kit";
import TurndownService from "turndown";
import axios from "axios";
import styles from "../../styles/AddPost.module.scss";
import Placeholder from "@tiptap/extension-placeholder";
import LinkButton from "../atoms/LinkButton";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../../context/AuthContextProvider";

export default function AddPostForm() {
  const turndownService = new TurndownService();
  const router = useRouter();
  const context = useContext(AuthContext);

  const cookie = document.cookie;
  const jwt = cookie.split("=")[1];
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: jwt,
    },
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Hi, start writing your content here :)",
      }),
    ],
  });

  return (
    <div className={styles.layout}>
      <LinkButton link="/home" text="Back" back={true}></LinkButton>
      <Formik
        initialValues={{
          Title: "",
          Summary: "",
        }}
        validationSchema={Yup.object({
          Title: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          Summary: Yup.string()
            .max(100, "Must be 100 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const html = editor.getHTML();
          const markdown = turndownService.turndown(html);
          const data = {
            data: {
              ...values,
              Content: markdown,
              Author: context.loggedUser.id,
            },
          };

          // https://still-escarpment-29927.herokuapp.com/api/blogs
          // http://localhost:1337/api/blogs
          axios
            .post(
              "https://still-escarpment-29927.herokuapp.com/api/blogs",
              data,
              config
            )
            .then((response) => router.push("/home"))
            .catch((error) => console.log(error));

          setSubmitting(false);
        }}
      >
        <Form className={styles.container}>
          <label htmlFor="Title">Title</label>
          <Field id="Title" name="Title" />
          <ErrorMessage name="Title">
            {(msg) => <p className={styles.error}>{msg}</p>}
          </ErrorMessage>
          <label htmlFor="Summary">Summary</label>
          <Field id="Summary" name="Summary" as="textarea" />
          <ErrorMessage name="Summary">
            {(msg) => <p className={styles.error}>{msg}</p>}
          </ErrorMessage>
          <div className={styles.divider}></div>
          <div className={styles.editor}>
            <Menubar editor={editor} />
            <EditorContent editor={editor} className={styles.content} />
          </div>
          <button type="submit" className={styles.button}>
            Create Post
          </button>
        </Form>
      </Formik>
    </div>
  );
}
