import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import PostCard from "../../components/common/PostCard";
import { PostProps } from "../../interfaces";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}

const PostsPage: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        {posts.slice(0, 10).map((post) => (
          <PostCard
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default PostsPage;
