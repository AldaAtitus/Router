import { useParams } from "react-router-dom";
import posts from "../data/posts";

export default function Post() {
  const { id } = useParams();
  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return (
      <section>
        <h1>Post não encontrado</h1>
        <p>Não foi possível localizar o post solicitado.</p>
      </section>
    );
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.summary}</p>
      <p>{post.content}</p>
      <p>
        <strong>Autor:</strong> {post.author}
      </p>
    </article>
  );
}
