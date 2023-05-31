import React, { useState } from "react";
import SelectDropdown from "./SelectDropdown";
import { Form, Button, Modal, InputGroup } from "react-bootstrap";

function AddOrderForm({ customerList, onAddOrder, setShowModal }) {
  const [customer_id, setCustomerID] = useState("");
  const [order_date, setOrderDate] = useState("");
  const [order_total, setTotal] = useState("");
  const [validated, setValidated] = useState(false);

  const order = { customer_id, order_date, order_total };
  const handleCustomerSelection = (customer) => {
    setCustomerID(customer);
  };

  const closeModal = () => setShowModal(false);

  const handleSubmit = (event, order) => {
    const form = event.currentTarget;

    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      onAddOrder(order);
      closeModal();
    }
  };

  return (
    <>
      <Form
        id="addOrderForm"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="add-customer-ID">
          <Form.Label className="col-form-label">Customer ID:</Form.Label>
          <SelectDropdown
            className={"form-select mb-3 bg-transparent"}
            ariaLabel={"customer_id"}
            onChangeHandler={handleCustomerSelection}
            id={"add-customer-ID"}
            name={"customer_id"}
            selectOptions={customerList}
            optionValue={"customer_id"}
            optionDisplay={"name"}
            defaultFilterValue={"None"}
            selectedOption={setCustomerID}
          ></SelectDropdown>
        </Form.Group>

        <Form.Group className="mb-3" controlId="add-date">
          <Form.Label className="col-form-label">Order Date:</Form.Label>
          <Form.Control
            type="datetime-local"
            className="bg-transparent"
            onChange={(e) => setOrderDate(e.target.value)}
            value={order_date}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="add-total-price">
          <Form.Label className="col-form-label">Total price:</Form.Label>
          <InputGroup className="mb-3" hasValidation>
            <InputGroup.Text id="dollarPrepend">$</InputGroup.Text>
            <Form.Control
              type="number"
              className="bg-transparent"
              value={order_total}
              min="0"
              step=".01"
              onChange={(e) => setTotal(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid drink price.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Modal.Footer>
          <Button
            type="button"
            id="cancel-add-order-btn"
            variant="secondary"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            id="add-new-order-btn"
            variant="primary"
            onClick={(e) => handleSubmit(e, order)}
          >
            {" "}
            Add Item{" "}
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
}

export default AddOrderForm;
