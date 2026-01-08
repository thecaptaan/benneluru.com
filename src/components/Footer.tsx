import "./styles/Footer.css";
import { Link } from "react-scroll"
export default function Footer() {
    const currentYear = new Date().getFullYear()
    return <footer className="footer cent">
        <div className="footer-item">
            <div className="footer-link-container">
                <div className="footer-link-card">
                    <ul className="row">
                        <li><Link smooth={true} duration={500} to="home">Home</Link></li>
                        <li><Link smooth={true} duration={500} to="signature">Signature from Bengaluru</Link></li>
                        <li><Link smooth={true} duration={500} to="serve">What We Serve</Link></li>
                        <li><Link smooth={true} duration={500} to="gallery">Gallery</Link></li>
                        <li><Link smooth={true} duration={500} to="specials">Kitchen Specials</Link></li>
                        <li><Link smooth={true} duration={500} to="story">Our Story</Link></li>
                    </ul>
                </div>
            </div>

            <div className="copyright cent">
                <p>
                    &copy; {currentYear} Benneluru & Developed By <a href="https://muftlo.com" target="_blank" rel="noopener noreferrer">Muftlo</a> . All rights reserved.
                </p>
            </div>
        </div>
    </footer>
}