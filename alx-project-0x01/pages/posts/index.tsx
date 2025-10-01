import PostCard from "../../components/common/PostCard";
import { Post } from "../../interfaces";

const PostsPage: React.FC = () => {
  const posts: Post[] = [
    { id: 1, title: "First Post", body: "This is the body of the first post." },
    { id: 2, title: "Second Post", body: "This is the body of the second post." },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsPage;
