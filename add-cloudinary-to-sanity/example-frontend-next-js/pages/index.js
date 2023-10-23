import React from "react";
import sanity from "../lib/sanity";
import groq from 'groq'
import ReactPlayer from "react-player/lazy";

const query = groq`*[_type == "post"] {
  _id,
  title,
  image,
  video
}
`;

const Posts = ({ post }) => {
  return (
    <div>
      {post.map(post => (
        <div key={post.title}>
          <h2>
            {post.title}
          </h2>
          <div>
          <h3>Cloudinary image</h3>
          <img 
            src={post.image.url} 
            alt="image"
            height="200px"
          />
          </div>
          <div>
          <h3>Cloudinary Video</h3>
            <ReactPlayer
              height="200px"
              width="400px"
              url={post.video.url}
              controls={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const post = await sanity.fetch(query);
  return {
    props: { post: post }
  };
};

export default Posts;