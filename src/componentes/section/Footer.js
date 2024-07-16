import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li> <a href='https://www.instagram.com/_gcursino/'> <FaInstagram size={30} /> </a></li>
                <li> <a href='https://github.com/thegabscr/' > <FaGithub size={30} /> </a></li>
                <li> <a href='https://www.linkedin.com/in/gabriel-cursino-rodrigues-a308a5201/'> <FaLinkedin size={30} /> </a></li>
            </ul>
            <p> thegabs.dev@hotmail.com </p>
            <p> Gabriel C. Rodrigues © 2023 </p>
        </div>
    )
}

export default Footer