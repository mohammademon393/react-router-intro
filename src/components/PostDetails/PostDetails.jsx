import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    
  const navigate = useNavigate();
    return (
      <div
        style={{
          border: "2px solid red",
          padding: "10px",
          borderRadius: "10px",
          margin: "10px",
        }}
      >
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
};

export default PostDetails;