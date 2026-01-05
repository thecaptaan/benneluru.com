import "./styles/UpperNavigation.css";
import Benneluru from "../assets/images/logo.jpg";

export default function UpperNavigation() {
    return <header>
        <div className="container-navbar">
            <nav className="navbar container">
                <div className="container-logo">
                    <a href="/">
                        <img className="logo" src={Benneluru} alt="" />
                    </a>
                </div>
                <i className="fa-solid fa-bars"></i>
                <div className="customer-support">
                    <i className="fa-solid fa-headset"></i>
                    <div className="content-customer-support">
                        <span className="text">Contact Us</span>
                        <span className="number"><a href="tel:+917889440384">+91 7889440384</a></span>
                    </div>
                </div>
            </nav>
        </div>
    </header>
}