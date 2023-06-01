import React, { useState } from "react";
import { Alert, Modal } from "react-bootstrap";

function AlertModal({ heading, message }) {
  const [show, setShow] = useState(true);

  const closeAlert = () => setShow(false);

  if (show) {
    return (
      <Modal id="alert-modal" onHide={closeAlert}>
        <Alert variant="danger" onClose={closeAlert} dismissible>
          <Alert.Heading>{heading}</Alert.Heading>
          <p>{message}</p>
        </Alert>
      </Modal>
    );
  }
}

export default AlertModal;
