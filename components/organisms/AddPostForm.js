import React, { useContext, useState } from "react";
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
import { AuthContext } from "../../context/AuthContextProvider";
import LoadingAnimation from "../atoms/LoadingAnimation";

export default function AddPostForm({ categories }) {
  const [imageState, setImageState] = useState({
    file: "",
  });
  const [imgState, setImgState] = useState({
    path: "",
  });
  const [loading, setLoading] = useState(false);
  const turndownService = new TurndownService();

  const router = useRouter();
  const context = useContext(AuthContext);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Hi, start writing your content here :)",
      }),
    ],
  });

  const handleFileChange = (e) => {
    setImageState({
      file: e.target.files[0],
    });
    setImgState({
      path: URL.createObjectURL(e.target.files[0]),
    });
  };

  return (
    <div className={styles.layout}>
      <LinkButton link="/blogs/pages/1" text="Back" back={true}></LinkButton>
      <Formik
        initialValues={{
          Title: "",
          Summary: "",
          Category: "1",
        }}
        validationSchema={Yup.object({
          Title: Yup.string()
            .max(40, "Must be 40 characters or less")
            .required("Required"),
          Summary: Yup.string()
            .max(100, "Must be 100 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setLoading(true);
          const html = editor.getHTML();
          const markdown = turndownService.turndown(html);

          const data = {
            data: {
              ...values,
              Content: markdown,
              Author: context.loggedUser.id,
            },
          };

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
              "https://still-escarpment-29927.herokuapp.com/api/blogs",
              data,
              config
            )

            .then((response) => {
              const file = new FormData();
              file.append("files", imageState.file);
              file.append("ref", "api::blog.blog");
              file.append("refId", response.data.data.id);
              file.append("field", "Photo");
              axios
                .post(
                  "https://still-escarpment-29927.herokuapp.com/api/upload",
                  file,
                  config
                )
                .then((response) => {
                  router.push("/blogs/pages/1");
                })
                .catch((error) => {
                  setLoading(false);
                  console.log(error);
                });
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
            });

          setSubmitting(false);
        }}
      >
        <Form className={styles.container}>
          <label htmlFor="photo">Cover Photo</label>
          <input
            type="file"
            name="photo"
            id="photo"
            className="form-control"
            onChange={handleFileChange}
          />
          <img
            className="img-fluid"
            src={imgState?.path}
            id="preview-image"
            alt=""
          />
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
          <label htmlFor="Category">Category</label>
          <Field as="select" name="Category" id="Category">
            {categories
              .sort((a, b) => (a.attributes.Name > b.attributes.Name ? 1 : -1))
              .map((x, index) => (
                <option key={index} value={x.id}>
                  {x.attributes.Name}
                </option>
              ))}
          </Field>
          <div className={styles.divider}></div>
          <div className={styles.editor}>
            <Menubar editor={editor} />
            <EditorContent editor={editor} className={styles.content} />
          </div>

          <button type="submit" className={styles.button}>
            Create Post
          </button>
          {loading && <LoadingAnimation />}
        </Form>
      </Formik>
    </div>
  );
}
