import React, { useState } from 'react';
import classes from './basket.module.scss'; // Необходимо создать файл стилей

interface ModalProps {
  isOpen: boolean; // Флаг для отображения модального окна
  onClose: () => void; // Коллбэк для закрытия модального окна
  title?: string; // Заголовок модального окна (необязательный)
  children: React.ReactNode; // Содержимое модального окна
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className={classes.modalOverlay} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {title && <header className={classes.modalHeader}>{title}</header>}
        <main className={classes.modalContent}>{children}</main>
        <footer className={classes.modalFooter}>
          <button className={classes.modalCloseButton} onClick={onClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};