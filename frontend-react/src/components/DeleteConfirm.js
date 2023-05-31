import React from "react";
import { Modal, Button } from "react-bootstrap";

function DeleteConfirm({ actionOnClick, id, setShowModal }) {
  const closeModal = () => setShowModal(false);

  const onDelete = () => {
    actionOnClick(id);
    closeModal();
  };

  return (
    <>
      <div className="alert alert-danger" role="alert">
        This action cannot be undone.
      </div>

      <Modal.Footer>
        <Button type="button" variant="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button type="button" variant="primary" onClick={onDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </>
  );
}

export default DeleteConfirm;
