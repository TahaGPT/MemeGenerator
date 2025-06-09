import Logo from "../assets/Logo.png"
import "../App.css";
export default function Header() {
    return (
        <header className = "Something">
            <img src = {Logo} alt = "Meme Logo" />
            <span>Meme Generator</span>
        </header>
    );
}