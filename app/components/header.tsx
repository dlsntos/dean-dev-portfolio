import Link from "next/link";

export default function Header() {
    return(
        <header className="fixed w-full top-0 left-0 py-7 bg-white shadow-md z-10">
            <div className="flex justify-between w-full max-w-7xl mx-auto">
                <h1>DS</h1>
                <nav>
                    <ul className="flex gap-5">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="">About</Link></li>
                        <li><Link href="">Portfolio</Link></li>
                        <li><Link href="">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}