import styles from "./Home.module.css";

import fotoSelfie from "../img/foto-selfie.jpeg";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <img src={fotoSelfie} alt="foto selfie" className={styles.photo} />

      <div className={styles.title}>
        <h1>
          <span>_</span>Eu sou o Vinícius Fontes
        </h1>

        <h2>Desenvolvedor Web</h2>

        <p className={styles.textHome}>
          Desde a infância, sou apaixonado por tecnologia, hoje estou
          constantemente buscando novas oportunidades de aprendizado e
          crescimento profissional. Meu compromisso primordial é aprimorar
          minhas habilidades e evoluir continuamente, sempre buscando excelência
          em meu campo de atuação.
        </p>

        <Link to="/about" className={styles.seeMoreBtn}>
          <p>Mais sobre mim!</p>
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
    </div>
  );
}
