import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

function AddCustomerForm({ onAddCust, setShowModal }) {
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [validated, setValidated] = useState(false);

  const closeModal = () => setShowModal(false);

  const customer = { name, phone };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      onAddCust(customer);
      closeModal();
    }
  };

  return (
    <>
      <Form
        id="addCustomerForm"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="add-name">
          <Form.Label className="col-form-label">Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            className="bg-transparent"
            onChange={(e) => setName(e.target.value)}
            value={name}
            autoFocus
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="add-phone">
          <Form.Label className="col-form-label">Phone number:</Form.Label>
          <Form.Control
            type="number"
            className="bg-transparent"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            value={phone}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>
        <Modal.Footer>
          <Button type="button" variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {" "}
            Add{" "}
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
}

export default AddCustomerForm;
