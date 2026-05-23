import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import posts from "../data/posts";

export default function Post() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header title="React Blog" />
        <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Post não encontrado</h2>
          <Button onClick={() => navigate("/")}>Voltar para Home</Button>
        </main>
        <Footer text="© 2024 React Blog — Guided Study sobre React Router" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header title="React Blog" />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <Button variant="secondary" onClick={() => navigate(-1)}>
          ← Voltar
        </Button>
        <article className="mt-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>{post.author}</span>
            <span>{post.date}</span>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">{post.content}</p>
        </article>
      </main>
      <Footer text="© 2024 React Blog — Guided Study sobre React Router" />
    </div>
  );
}