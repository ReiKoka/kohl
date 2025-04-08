import { createContext, useRef, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState(null);
  const modalRef = useRef(null);

  function openModal(type, props = {}) {
    setActiveModal({ type, props });
  }

  function closeModal() {
    setActiveModal(null);
  }

  return (
    <ModalContext.Provider
      value={{ activeModal, closeModal, openModal, modalRef }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext };
