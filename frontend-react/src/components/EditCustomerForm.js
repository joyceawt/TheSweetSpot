import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

export const EditCustomerForm = ({ customer, onClickAction, setShowModal }) => {
  const [name, setNewName] = useState(customer.name);
  const [phone, setNewPhone] = useState(customer.phone);
  const [customer_id] = useState(customer.customer_id);
  const [validated, setValidated] = useState(false);

  const closeModal = () => setShowModal(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);
      editCustomer();
    }
  };

  const editCustomer = async () => {
    try {
      await axios.put(`http://localhost:9124/api/customers/${customer_id}`, {
        name: name,
        phone: phone,
      });
      onClickAction();
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form
        id={"editCustomerForm-" + customer_id}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group
          className="mb-3 d-flex"
          controlId={"customer-ID" + customer_id}
        >
          <Form.Label className="col-form-label">Customer ID:</Form.Label>
          <Form.Control
            type="text"
            className="bg-transparent ms-2"
            placeholder="Name"
            style={{ width: "15%" }}
            value={customer_id}
            required
            disabled
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="customer-name">
          <Form.Label className="col-form-label">Name:</Form.Label>
          <Form.Control
            className="bg-transparent"
            type="text"
            onChange={(e) => setNewName(e.target.value)}
            value={name}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="customer-phone">
          <Form.Label className="col-form-label">Phone Number:</Form.Label>
          <Form.Control
            className="bg-transparent"
            type="tel"
            onChange={(e) => setNewPhone(e.target.value)}
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
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default EditCustomerForm;
