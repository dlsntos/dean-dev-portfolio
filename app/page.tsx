import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Projects from "./components/sections/projects";
import Contacts from "./components/sections/contacts";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Contacts />
      </main>
    </div>
  );
}
