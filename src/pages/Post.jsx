import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import posts from "../data/posts";

export default function Post() {
  const { id } = useParams();
  const post = id ? posts.find((item) => item.id === Number(id)) : posts[0];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header title="Blog React" />
        <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
          <article className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Post nao encontrado</h1>
            <p className="text-gray-700">Nao foi possivel localizar o post solicitado.</p>
          </article>
        </main>
        <Footer text="Atitus 2026 - Todos os direitos reservados" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header title="Blog React" />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <article className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{post.title}</h1>

          <p className="text-sm text-gray-500 mb-6">
            Por {post.author} em {post.date}
          </p>

          <p className="text-gray-700 leading-7 mb-8">{post.content}</p>

          <Button variant="secondary">Voltar</Button>
        </article>
      </main>

      <Footer text="Atitus 2026 - Todos os direitos reservados" />
    </div>
  );
}
