import {
  faComments,
  faHome,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li className={styles.icons}>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            <span className={styles.iconText}>Home</span>
          </Link>
        </li>

        <li className={styles.icons}>
          <Link to="/about">
            <FontAwesomeIcon icon={faUser} />
            <span className={styles.iconText}>Sobre</span>
          </Link>
        </li>

        <li className={styles.icons}>
          <Link to="/projects">
            <FontAwesomeIcon icon={faSuitcase} />
            <span className={styles.iconText}>Projetos</span>
          </Link>
        </li>

        <li className={styles.icons}>
          <Link to="/contact">
            <FontAwesomeIcon icon={faComments} />
            <span className={styles.iconText}>Contato</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
