import { useEffect } from "react";

import styles from "./Modal2.module.css";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

function Modal2({ onClose, bigImg, pictureName }) {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return createPortal(
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div className={styles.Modal}>
        <img src={bigImg} alt={pictureName} />
      </div>
    </div>,
    modalRoot
  );
}

Modal2.defaultProps = {
  pictureName: "",
  bigImg: null,
};

Modal2.propTypes = {
  onClick: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  pictureName: PropTypes.string,
  bigImg: PropTypes.string,
};

export default Modal2;
