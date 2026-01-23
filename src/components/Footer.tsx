import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faSteam } from "@fortawesome/free-brands-svg-icons/faSteam";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    const iconSize = "20px";

    return (
        <footer id="footer" className="footer-section">
            <p>
                Created with <a href="https://www.react.dev/" target="_blank" rel="noopener noreferrer">React v19.2.0</a> and <a href="https://www.vite.dev/" target="_blank" rel="noopener noreferrer">Vite v7.2.4</a>
            </p>
            <p>
                Icons by <a href="https://www.fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a> and <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">FlatIcon</a>
            </p>
            <p>
                Header images by <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">Pexels</a>
            </p>
            <div className="social-links">
                <a className="social-links-icons" href="https://www.linkedin.com/in/ricky-c0997/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} fontSize={iconSize} />
                </a>
                <a className="social-links-icons" href="https://www.github.com/mrlangloi" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} fontSize={iconSize} />
                </a>
                <a className="social-links-icons" href="https://www.steamcommunity.com/id/rikkiimaru/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSteam} fontSize={iconSize} />
                </a>
                <a className="social-links-icons" href="mailto:rca162@sfu.ca" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} fontSize={iconSize} />
                </a>
            </div>
            <p>
                &copy; 2026, Ricky Cheung
            </p>
        </footer>
    );
};

export default Footer;