import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Modal, InputGroup } from "react-bootstrap";
import { SelectDropdown } from "./index";

function EditOrderForm({ order, onClickAction, customerList, setShowModal }) {
  const [customer_id, setNewCustomerID] = useState(order.customer_id);
  const [order_total, setNewTotal] = useState(order.order_total);
  const [order_id] = useState(order.order_id);
  const [validated, setValidated] = useState(false);
  const editCustomerID = `edit-order-cust-ID-${order_id}`;

  const getDateTimeValue = (d) => {
    return new Date(d).toISOString().slice(0, -8);
  };

  const [order_date, setNewOrderDate] = useState(() =>
    getDateTimeValue(order.order_date)
  );

  const closeModal = () => setShowModal(false);

  const handleCustomerSelection = (customer) => {
    setNewCustomerID(customer);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      editOrder();
    }
  };

  const editOrder = async () => {
    try {
      await axios.put(`http://localhost:9124/api/orders/${order_id}`, {
        customer_id: customer_id,
        order_date: order_date,
        order_total: order_total,
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
        id={"editOrder-" + order_id}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group
          className="mb-3 d-flex"
          controlId={"edit-order-ID-" + order_id}
        >
          <Form.Label className="col-form-label">Order ID:</Form.Label>
          <Form.Control
            type="text"
            className="bg-transparent ms-2"
            placeholder="Name"
            style={{ width: "15%" }}
            value={order_id}
            required
            disabled
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId={editCustomerID}>
          <Form.Label className="col-form-label">Customer ID:</Form.Label>
          <SelectDropdown
            className={"form-select mb-3 bg-transparent"}
            ariaLabel={"customer_id"}
            onChangeHandler={handleCustomerSelection}
            id={editCustomerID}
            name={"customer_id"}
            selectOptions={customerList}
            optionValue={"customer_id"}
            optionDisplay={"name"}
            selectedOption={customer_id}
          ></SelectDropdown>
        </Form.Group>

        <Form.Group className="mb-3" controlId={"edit-order-date" + order_id}>
          <Form.Label className="col-form-label">Order Date:</Form.Label>
          <Form.Control
            type="datetime-local"
            className="bg-transparent"
            onChange={(e) => setNewOrderDate(e.target.value)}
            value={order_date}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid order date.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId={"edit-order-total-price" + order_id}
        >
          <Form.Label className="col-form-label">Total price:</Form.Label>
          <InputGroup className="mb-3" hasValidation>
            <InputGroup.Text id="dollarPrepend">$</InputGroup.Text>
            <Form.Control
              type="number"
              className="bg-transparent"
              value={order_total}
              min="1"
              step=".01"
              onChange={(e) => setNewTotal(e.target.value)}
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
            id={"cancel-edit-order-btn" + order_id}
            variant="secondary"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            id={"edit-order-btn-" + order_id}
            variant="primary"
          >
            {" "}
            Save{" "}
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
}

export default EditOrderForm;
