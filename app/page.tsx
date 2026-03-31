import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Projects from "./components/sections/projects";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}
