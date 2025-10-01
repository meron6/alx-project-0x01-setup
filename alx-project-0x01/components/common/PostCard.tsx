import React from "react";
import { Post } from "../../interfaces";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="border rounded p-4 shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
