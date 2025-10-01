import React from "react";

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="border rounded p-4 shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
