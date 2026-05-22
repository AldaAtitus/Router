import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header title="React Blog" />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Página não encontrada
        </h2>
        <p className="text-gray-600 mb-6">
          A página que você está procurando não existe ou foi removida.
        </p>
        <Button onClick={() => navigate("/")}>Voltar para Home</Button>
      </main>
      <Footer text="© 2024 React Blog — Guided Study sobre React Router" />
    </div>
  );
}
