import useModal from "./../../hooks/useModal";
import Modal from "./../ui/Modal";

export const JUICE_MODAL_TYPE = "JUICE_MODAL";

function JuiceModal() {
  const { activeModal, closeModal } = useModal();

  const isOpen = activeModal?.type === JUICE_MODAL_TYPE;

  const product = activeModal?.props?.product;

  if (!isOpen) {
    return null;
  }

  return (
    <Modal onClose={closeModal} isOpen={isOpen} title={product.primaryName}>
      <div>Modal HELLO</div>
    </Modal>
  );
}

export default JuiceModal;
