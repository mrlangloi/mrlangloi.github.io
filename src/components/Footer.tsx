import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import { faSteam } from "@fortawesome/free-brands-svg-icons/faSteam"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Footer.module.css"

const Footer = () => (
    <footer id="footer" className={styles["footer-section"]}>
        <div className={styles["footer-inner"]}>
            <div className={styles["footer-meta"]}>
                <p>
                    Built with{" "}
                    <a className={styles["footer-links"]} href="https://react.dev/" target="_blank" rel="noopener noreferrer">React v19</a>
                    {" & "}
                    <a className={styles["footer-links"]} href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite v7</a>
                </p>
                <p>
                    Icons by{" "}
                    <a className={styles["footer-links"]} href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a>
                    {" & "}
                    <a className={styles["footer-links"]} href="https://flaticon.com/" target="_blank" rel="noopener noreferrer">FlatIcon</a>
                </p>
            </div>

            <p className={styles["footer-copy"]}>&copy; 2026 Ricky Cheung</p>

            <div className={styles["social-links"]}>
                <a href="https://www.linkedin.com/in/ricky-c0997/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} fontSize="15px" />
                </a>
                <a href="https://www.github.com/mrlangloi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} fontSize="15px" />
                </a>
                <a href="https://www.steamcommunity.com/id/rikkiimaru/" target="_blank" rel="noopener noreferrer" aria-label="Steam">
                    <FontAwesomeIcon icon={faSteam} fontSize="15px" />
                </a>
                <a href="mailto:rcheung1997@gmail.com" aria-label="Email">
                    <FontAwesomeIcon icon={faEnvelope} fontSize="15px" />
                </a>
            </div>
        </div>
    </footer>
)

export default Footer