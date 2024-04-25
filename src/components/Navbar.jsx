import {
  faEnvelopeOpen,
  faFile,
  faFolderOpen,
  faGear,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li className="icon-container">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            <span class="icon-text">Home</span>
          </Link>
        </li>

        <li className="icon-container">
          <Link to="/about">
            <FontAwesomeIcon icon={faUser} />
            <span class="icon-text">Sobre</span>
          </Link>
        </li>

        <li className="icon-container">
          <Link to="/projects">
            <FontAwesomeIcon icon={faFolderOpen} />
            <span class="icon-text">Projetos</span>
          </Link>
        </li>

        <li className="icon-container">
          <Link to="/certificates">
            <FontAwesomeIcon icon={faFile} />
            <span class="icon-text">Certificados</span>
          </Link>
        </li>

        <li className="icon-container">
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelopeOpen} />
            <span class="icon-text">Contato</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
