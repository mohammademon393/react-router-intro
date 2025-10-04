import React from "react";
import { Link } from "react-router";

const Post = ({ post }) => {
  const { title, id } = post;
  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "10px",
        borderRadius: "10px",
        margin: "10px",
      }}
    >
      <h3>{title}</h3>
      <Link to={`/posts/${id}`}>
        <button>Show post</button>
      </Link>
    </div>
  );};

export default Post;
