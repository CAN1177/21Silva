import React, { useEffect, useState } from 'react';
import './styles/index.less';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, children, title } = props;
  const [display, setDisplay] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setDisplay(true);
    }
  }, [isOpen]);

  const closeModal = () => {
    setDisplay(false);
    onClose();
  };

  if (!display) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">{title}</div>
        {children}
        <button type="button" className="modal-close" onClick={closeModal}>
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
