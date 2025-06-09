import Logo from "../assets/Logo.png"
export default function Header() {
    return (
        <header>
            <img src = {Logo} alt = "Meme Logo" />
            <span>Meme Generator</span>
        </header>
    );
}