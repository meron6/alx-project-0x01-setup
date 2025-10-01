import React from "react";
import { PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ userId, id, title, body }) => {
  return (
    <div className="border rounded p-4 shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{body}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
      <p className="text-sm text-gray-500">Post ID: {id}</p>
    </div>
  );
};

export default PostCard;
