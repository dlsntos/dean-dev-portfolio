import Link from "next/link";

export default function Header() {
    return(
        <header className="flex justify-between px-5 py-3">
            <h1>DS</h1>
            <nav>
                <ul className="flex gap-5">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="">About</Link></li>
                    <li><Link href="">Portfolio</Link></li>
                    <li><Link href="">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}