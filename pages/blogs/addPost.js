import React from "react";
import { useRouter } from "next/router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEditor, EditorContent } from "@tiptap/react";
import Menubar from "../../components/Menubar";
import StarterKit from "@tiptap/starter-kit";
import TurndownService from "turndown";
import axios from "axios";

function AddPost() {
  const turndownService = new TurndownService();
  const router = useRouter();

  const editor = useEditor({
    extensions: [StarterKit],
    content: `
    <h2>
      Hi there, this is a tiptap rich editor
    </h2>
  `,
  });

  return (
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
          .max(200, "Must be 200 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const html = editor.getHTML();
        const markdown = turndownService.turndown(html);
        const data = {
          data: { ...values, Content: markdown },
        };

        // https://still-escarpment-29927.herokuapp.com/api/blogs
        // http://localhost:1337/api/blogs
        axios
          .post("http://localhost:1337/api/blogs", data)
          .then((response) => router.push("/home"))
          .catch((error) => console.log(error));

        setSubmitting(false);
      }}
    >
      <Form>
        <label htmlFor="Title">Title</label>
        <Field id="Title" name="Title" />
        <ErrorMessage name="Title" />
        <label htmlFor="Summary">Summary</label>
        <Field id="Summary" name="Summary" />
        <ErrorMessage name="Summary" />
        <div>
          <Menubar editor={editor} />
          <EditorContent editor={editor} className="content" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default AddPost;
