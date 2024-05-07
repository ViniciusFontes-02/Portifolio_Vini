import React from "react";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div className={styles.bgModal}>
        <div className={styles.containerModal}>
          <button onClick={setModalOpen} className={styles.closeBtn}>
            X
          </button>

          <div>{children}</div>
        </div>
      </div>
    );
  }

  return null;
}
