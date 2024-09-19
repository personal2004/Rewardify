import React from 'react';
import styles from './index.module.css';
const Modal = ({ show, onClose, children,button_text,buttonStyle }) => {

  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          {children}
          <button onClick={onClose} className={buttonStyle}>{button_text}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
