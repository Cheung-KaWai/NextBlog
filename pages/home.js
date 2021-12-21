import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { AuthContext } from "../context/AuthContextProvider";
import * as Yup from "yup";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Menubar from "../components/Menubar";
import TurndownService from "turndown";
import axios from "axios";

export default function Home() {
  const context = useContext(AuthContext);
  const router = useRouter();
  let turndownService = new TurndownService();

  const editor = useEditor({
    extensions: [StarterKit],
    content: `
    <h2>
      Hi there, this is a tiptap rich editor
    </h2>
    
  `,
  });

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    context.setLoggedUser(undefined);
    router.push("/login");
  };

  return (
    <div>
      <p>{context.loggedUser && context.loggedUser.username}</p>
      <button onClick={handleLogout}>Logout</button>
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
            .post(
              "https://still-escarpment-29927.herokuapp.com/api/blogs",
              data
            )
            .then((response) => console.log(response))
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
    </div>
  );
}
