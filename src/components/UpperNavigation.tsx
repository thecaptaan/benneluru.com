import "./styles/UpperNavigation.css";
import Benneluru from "../assets/images/logo.png";

export default function UpperNavigation() {
    return <nav className="navbar cent">
        <div className="navbar-item row">
            <div className="navbar-logo">
                <a href="/">
                    <img className="logo" src={Benneluru} alt="" />
                </a>
            </div>
        </div>
    </nav>
}