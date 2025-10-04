import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const postsData = useLoaderData();
    // const { title } = postsData;
    return (
      <div>
        <h2>My posts data is here: {postsData.length}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {postsData.map((post) => (
            <Post key={post.id} post={post}></Post>
          ))}
        </div>
      </div>
    );
};

export default Posts;