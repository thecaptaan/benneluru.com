import "./styles/FloatingSocial.css";
import FacebookIcon from "../assets/images/facebook.svg";
import WhatsappIcon from "../assets/images/whatsapp.svg";
import InstagramIcon from "../assets/images/instagram.svg";
export default function FloatingSocial() {
    return <div className="social cent">
        <div className="social-item col">
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} className="social-icon" alt="" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} className="social-icon" alt="" />
            </a>
            <a href="https://www.instagram.com/benneluru/" target="_blank" rel="noopener noreferrer">
                <img src={WhatsappIcon} className="social-icon" alt="" />
            </a>
        </div>

    </div>
}