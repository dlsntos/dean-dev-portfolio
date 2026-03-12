export default function Header() {
    return(
        <header className="flex justify-between px-5 py-3">
            <h1>DS</h1>
            <nav>
                <ul className="flex gap-5">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}