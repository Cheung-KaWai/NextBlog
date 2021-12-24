import React from "react";
import styles from "../../styles/AddPost.module.scss";

export default function Menubar({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <>
      <div>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? styles.isActive : ""
          }
          type="button"
        >
          h2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? styles.isActive : ""
          }
          type="button"
        >
          h3
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive("heading", { level: 4 }) ? styles.isActive : ""
          }
          type="button"
        >
          h4
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive("heading", { level: 5 }) ? styles.isActive : ""
          }
          type="button"
        >
          h5
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive("heading", { level: 6 }) ? styles.isActive : ""
          }
          type="button"
        >
          h6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? styles.isActive : ""}
          type="button"
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? styles.isActive : ""}
          type="button"
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? styles.isActive : ""}
          type="button"
        >
          strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? styles.isActive : ""}
          type="button"
        >
          code
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? styles.isActive : ""}
          type="button"
        >
          paragraph
        </button>
      </div>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? styles.isActive : ""}
        type="button"
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? styles.isActive : ""}
        type="button"
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? styles.isActive : ""}
        type="button"
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? styles.isActive : ""}
        type="button"
      >
        blockquote
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        type="button"
      >
        horizontal rule
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        type="button"
      >
        hard break
      </button>
    </>
  );
}
