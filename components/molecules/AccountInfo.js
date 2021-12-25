import React from "react";

export default function AccountInfo({ blogs, account }) {
  return (
    <div>
      <p>{account.username}</p>
      <p>Joined {account.createdAt.substring(0, 10)}</p>
      <p>blogs created {blogs}</p>
    </div>
  );
}
