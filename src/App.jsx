import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Post";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="React Blog" />
      <nav className="max-w-4xl mx-auto px-4 py-4 w-full flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/post/1">Post 1</Link>
      </nav>
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </main>
      <Footer text="© 2024 React Blog — Guided Study sobre React Router" />
    </div>
  );
}

export default App;
