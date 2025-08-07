import React from "react";
import UsersList from "./users-list";
import CreatePost from "./create-post";

const Api = () => {
  return (
    <div
      style={{
        // display: "flex",
        // flexDirection: "column",
        padding: "20px",
        fontFamily: "Arial",
        gap: "40px",
      }}
    >
      <UsersList />
      <hr />
      <CreatePost />
    </div>
  );
};

export default Api;
