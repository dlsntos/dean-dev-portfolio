import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/sections/hero";

export default function Home() {
  return (
    <div>
      <Header/>
      <main className="pt-20">
        <Hero />
      </main>
    </div>
  );
}
