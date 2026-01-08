import "./styles/FloatingSocial.css";
import FacebookIcon from "../assets/images/facebook.svg";
import WhatsappIcon from "../assets/images/whatsapp.svg";
import InstagramIcon from "../assets/images/instagram.svg";
export default function FloatingSocial() {
    return <div className="social cent">
        <div className="social-item col">
            <a href="https://www.facebook.com/profile.php?id=61585858032488" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} className="social-icon" alt="facebook logo" />
            </a>
            <a href="https://www.instagram.com/benneluru/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} className="social-icon" alt="instagram logo" />
            </a>
            <a href="https://wa.link/9njb0b" target="_blank" rel="noopener noreferrer">
                <img src={WhatsappIcon} className="social-icon" alt="whatsapp logo" />
            </a>
        </div>

    </div>
}