import { faDroplet, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./DarkMode.module.css";

export default function DarkMode() {
  return (
    <div className={styles.darkMode}>
      <ul>
        <li className={styles.iconContainer}>
          <FontAwesomeIcon icon={faGear} />
          {/* <span>darkmode</span> */}
        </li>
        <li className={styles.iconContainer}>
          <FontAwesomeIcon icon={faDroplet} />
          {/* <span>cores</span> */}
        </li>
      </ul>
    </div>
  );
}
