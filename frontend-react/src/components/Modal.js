import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Modal";

function ModalComponent({
  trigger,
  content,
  btnClasses,
  buttonName,
  title,
  showModal,
  setShowModal,
}) {
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <button type="button" className={btnClasses} onClick={handleShow}>
        {buttonName}
      </button>
      <Modal
        contentClassName="bg-white"
        size="lg"
        show={showModal}
        id={trigger}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
          <Button type="button" className="btn-close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;
