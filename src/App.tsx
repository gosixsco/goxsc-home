import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}