import React from 'react';
import styles from './index.module.css';
import { useLocation } from 'react-router-dom';
const Modal = ({ show, onClose, children,button_text,buttonStyle,onCancel,modalstyle='default' }) => {

  const location=useLocation();
  const showCancel=location.pathname==='/home/profile/logout' || location.pathname==='/home/products';
  console.log(modalstyle)
  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={modalstyle==='default'?styles.modal:styles.Modalprepare}>
        <div className={styles.modalContent}>
          {children}
          <button onClick={onClose} className={buttonStyle}>{button_text}</button>
          { showCancel && 
             <h6 onClick={onCancel}>Cancel</h6>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
