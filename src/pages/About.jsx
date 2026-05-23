import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="React Blog" />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre o Blog</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Este blog foi criado como parte de um estudo dirigido sobre React Router.
          O objetivo é aprender como funciona a navegação em Single Page Applications
          utilizando React.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Aqui você encontra posts sobre React, desenvolvimento web e tecnologias
          relacionadas. Todo o conteúdo é fictício e serve apenas para fins educacionais.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Tecnologias utilizadas: React, React Router, Tailwind CSS e Vite.
        </p>
      </main>
      <Footer text="© 2024 React Blog — Guided Study sobre React Router" />
    </div>
  );
}