import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import posts from "../data/posts";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header title="React Blog" />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Últimos Posts</h2>
        <PostList posts={posts} onPostClick={handlePostClick} />
      </main>
      <Footer text="© 2024 React Blog — Guided Study sobre React Router" />
    </div>
  );
}