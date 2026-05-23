import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import posts from "../data/posts";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header title="Blog React" />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <PostList posts={posts} onPostClick={(postId) => console.log("Post clicado:", postId)} />

        <p className="mt-6 text-gray-700">
          Leia o <Link to="/post/1" className="text-indigo-600 hover:underline">primeiro post</Link>.
        </p>
      </main>

      <Footer text="Atitus 2026 - Todos os direitos reservados" />
    </div>
  );
}
