import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full top-5 left-0 z-10">
      <div className="flex justify-between w-full max-w-7xl p-7 bg-white shadow-md mx-auto">
        <h1>DS</h1>
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about-me">About</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contacts">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
