import global from "../images/worldwide.png"

export default function Navbar() {
    return (
        <nav id="navbar">
            <img id="global-icon" src={global}/>
            <span id="title">my travel journal.</span>
        </nav>
    );
}