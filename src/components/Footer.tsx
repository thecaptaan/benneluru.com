import "./styles/Footer.css";
export default function Footer() {
    return <footer className="footer">
        <div className="container container-footer">
            <div className="menu-footer">
                <div className="contact-info">
                    <p className="title-footer">Información de Contacto</p>
                    <ul>
                        <li>
                            Direction: F-91A, Gautam Marg, C Scheme, Ashok Nagar, Jaipur, Rajasthan 302001
                        </li>
                        <li>Telephone: 123-456-7890</li>
                        <li>Email: support@benneluru.com</li>
                    </ul>
                    <div className="social-icons">
                        <span className="facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </span>
                        <span className="twitter">
                            <i className="fa-brands fa-twitter"></i>
                        </span>
                        <span className="youtube">
                            <i className="fa-brands fa-youtube"></i>
                        </span>
                        <span className="pinterest">
                            <i className="fa-brands fa-pinterest-p"></i>
                        </span>
                        <a href="https://www.instagram.com/benneluru/" target="_blank" rel="noopener noreferrer">
                            <span className="instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="footer-link-container row">
                    <div className="information">
                        <p className="title-footer">Información</p>
                        <ul>
                            <li><a href="#">Acerca de Nosotros</a></li>
                            <li><a href="#">Información Delivery</a></li>
                            <li><a href="#">Politicas de Privacidad</a></li>
                            <li><a href="#">Términos y condiciones</a></li>
                            <li><a href="#">Contactános</a></li>
                        </ul>
                    </div>

                    <div className="my-account">
                        <p className="title-footer">Legals</p>

                        <ul>
                            <li><a href="#">robots.txt</a></li>
                            <li><a href="#">sitemap.xml</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>


            </div>

            <div className="copyright">
                <p>
                    Desarrollado por Programación para el mundo &copy; 2022
                </p>

                <img src="img/payment.png" alt="Pagos" />
            </div>
        </div>
    </footer>
}