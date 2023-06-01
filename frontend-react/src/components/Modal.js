import React from "react";
import { Modal } from "react-bootstrap";

function ModalComponent({
  trigger,
  content,
  btnClasses,
  buttonName,
  title,
  showModal,
  setShowModal,
  contentClassName = "bg-white",
}) {
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <button type="button" className={btnClasses} onClick={handleShow}>
        {buttonName}
      </button>
      <Modal
        contentClassName={contentClassName}
        size="lg"
        show={showModal}
        id={trigger}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;
