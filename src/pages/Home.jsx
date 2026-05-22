import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>Bem-vindo à página inicial.</p>
      <p>
        Leia o <Link to="/post/1">primeiro post</Link>.
      </p>
    </section>
  );
}
