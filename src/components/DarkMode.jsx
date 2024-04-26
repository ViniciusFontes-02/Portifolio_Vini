import { faDroplet, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function DarkMode() {
  return (
    <div className="darkMode">
      <ul>
        <li className="icon-container">
          <FontAwesomeIcon icon={faGear} />
          {/* <span>darkmode</span> */}
        </li>
        <li className="icon-container">
          <FontAwesomeIcon icon={faDroplet} />
          {/* <span>cores</span> */}
        </li>
      </ul>
    </div>
  );
}
