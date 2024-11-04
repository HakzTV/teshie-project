import { faFacebookF, faInstagramSquare, faPinterestP, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return ( 
        <footer>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-top">
                        <h2>Get Started today</h2>
                        <p>Get in touch with us to help you get the best of both worlds</p>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-socials">
                            <a href="/">
                                <FontAwesomeIcon icon={faPinterestP} />
                            </a>
                            <a href="/">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="/">
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </a>
                            <a href="/">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                        <div className="right">
                        <div className="footer-about">
                            <h2 className="footer-about-title">About Us</h2>
                            <ul>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Text 01</a></li>
                                <li><a href="/">Text 02</a></li>
                            </ul>
                        </div>
                        <div className="footer-about">
                            <h2 className="footer-about-title">Explore</h2>
                            <ul>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Text 01</a></li>
                                <li><a href="/">Text 02</a></li>
                            </ul>
                        </div>
                        <div className="footer-about">
                            <h2 className="footer-about-title">About Us</h2>
                            <ul>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Text 01</a></li>
                                <li><a href="/">Text 02</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
