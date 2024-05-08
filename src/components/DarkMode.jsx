import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./DarkMode.module.css";
import { useEffect, useState } from "react";

export default function DarkMode() {
  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState(faSun);

  useEffect(() => {
    const savedTheme = localStorage.getItem("themeSystem");
    if (savedTheme) {
      setTheme(savedTheme);
      defineCurrentTheme(savedTheme);
      setIcon(savedTheme === "light" ? faSun : faMoon);
    }
  }, []);

  function clickDarkBtn() {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("themeSystem", newTheme);
    defineCurrentTheme(newTheme);
    setTheme(newTheme);
    setIcon(newTheme === "light" ? faSun : faMoon);
  }

  function defineCurrentTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  return (
    <div className={styles.darkMode}>
      <ul>
        <li className={styles.iconContainer} onClick={clickDarkBtn}>
          <FontAwesomeIcon icon={icon} className={styles.icon} />
        </li>
      </ul>
    </div>
  );
}
