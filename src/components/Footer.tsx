import "./styles/Footer.css";
export default function Footer() {
    const currentYear = new Date().getFullYear()
    return <footer className="footer cent">
        <div className="footer-item">
            <div>
            </div>

            <div className="copyright">
                <p>
                    &copy; {currentYear} Benneluru. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
}