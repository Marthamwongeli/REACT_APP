import React, { useState } from "react";
import "./index.css"; 

const Modal = ({ isOpen, onClose, children }) => {
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    if (isOpen &&!isMounted) {
      document.body.style.overflow = "hidden";
      setIsMounted(true);
    }
    return () => {
      document.body.style.overflow = "";
      setIsMounted(false);
    };
  }, [isOpen]);

  const handleOverlayClick = (event) => {
    event.stopPropagation();
    onClose();
  };

  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleContentClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
