import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header title="Blog React" />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Sobre o Blog</h1>
          <p className="text-gray-700 leading-7">
            Este projeto foi desenvolvido para praticar os fundamentos de React, organizacao de
            componentes e estrutura de paginas com React Router. Aqui voce encontra exemplos de
            listagem de posts, visualizacao de conteudo completo e composicao de interface com
            componentes reutilizaveis como Header, Footer e Button.
          </p>
        </section>
      </main>

      <Footer text="Atitus 2026 - Todos os direitos reservados" />
    </div>
  );
}
