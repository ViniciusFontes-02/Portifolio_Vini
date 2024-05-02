import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  return (
    <section className="container">
      <h2 className="title-pages">
        Fale <span>comigo</span>
      </h2>
      <div className="underline"></div>

      <div class="contact-section">
        <h3>Contatos:</h3>

        <div className="contact-icons">
          <a
            href="mailto:vinif.santos2002@gmail.com"
            target="_blank"
            title="Contato para E-mail"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          <a
            href="https://www.linkedin.com/in/vinicius-fontes-b7a83a266/"
            target="_blank"
            title="Perfil no LinkedIn"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://github.com/ViniciusFontes-02"
            target="_blank"
            title="Perfil no GitHub"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.instagram.com/vinifontes_00/"
            target="_blank"
            title="Perfil no Instagram"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </section>
  );
}
