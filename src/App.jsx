import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="React Blog" />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <p className="text-gray-600 text-center">
          Bem-vindo ao React Blog! Siga as instruções do README para começar.
        </p>
      </main>
      <Footer text="© 2024 React Blog — Guided Study sobre React Router" />
    </div>
  );
}

export default App;
