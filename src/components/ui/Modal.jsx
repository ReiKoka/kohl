import { createPortal } from "react-dom";
import { useOnClickOutside } from "usehooks-ts";
import useModal from "../../hooks/useModal";
import { X } from "@phosphor-icons/react";

const Modal = ({ isOpen, onClose, title, description, children }) => {
  const { modalRef } = useModal();

  useOnClickOutside(modalRef, onClose);
  if (!isOpen) return null;

  const modalContent = (
    <>
      <div
        className="animate-fade animate-once animate-ease-out dark:bg-secondary/30 fixed inset-0 z-40 h-full w-full backdrop-blur-[2.5px] duration-1000"
        onClick={onClose}
        style={{ pointerEvents: "auto" }}
      ></div>

      <dialog
        open
        className="bg-secondary/20 fixed inset-0 z-50 m-0 flex h-dvh w-dvw items-center justify-center border-0 p-0"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div
          id="modal-content"
          className={`bg-base-100 } relative flex max-h-[90dvh] w-full max-w-xl flex-col overflow-y-auto rounded-lg p-6 shadow-lg transition-all`}
          ref={modalRef}
        >
          <button
            className="btn border-primary group hover:bg-primary h-fit w-fit self-end rounded-full border bg-transparent p-1"
            onClick={onClose}
          >
            <X className="fill-primary group-hover:fill-primary-content h-5 w-5" />
          </button>

          <h2
            className={`font-secondary text-base-content text-center capitalize ${
              description ? "-mb-2" : "pb-6"
            } text-xl font-semibold`}
          >
            {title}
          </h2>
          {description && (
            <p className="font-primary text-base-content pb-6 text-center">
              {description}
            </p>
          )}
          <div className="text-base-content font-primary w-full max-w-full">
            {children}
          </div>
        </div>
      </dialog>
    </>
  );

  return createPortal(modalContent, document.getElementById("modal-root"));
};

export default Modal;
