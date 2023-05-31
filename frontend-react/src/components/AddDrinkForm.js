import React, { useState } from "react";
import { Form, Button, Modal, InputGroup } from "react-bootstrap";

function AddDrinkForm({ onAddDrink, setShowModal }) {
  const [drink_name, setDrinkName] = useState([]);
  const [drink_description, setDrinkDescription] = useState([]);
  const [drink_price, setDrinkPrice] = useState([]);
  const [validated, setValidated] = useState(false);

  const closeModal = () => setShowModal(false);

  const drink = { drink_name, drink_description, drink_price };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      onAddDrink(drink);
      closeModal();
    }
  };

  return (
    <>
      <Form
        id="addDrinkForm"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="add-drink-name">
          <Form.Label className="col-form-label">Drink Name:</Form.Label>
          <Form.Control
            type="text"
            className="bg-transparent"
            placeholder="Drink Name"
            value={drink_name}
            onChange={(e) => setDrinkName(e.target.value)}
            autoFocus
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid drink name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="add-description">
          <Form.Label className="col-form-label">Description:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            className="bg-transparent"
            value={drink_description}
            onChange={(e) => setDrinkDescription(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid drink description.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="add-price">
          <Form.Label className="col-form-label">Price:</Form.Label>
          <InputGroup className="mb-3" hasValidation>
            <InputGroup.Text id="dollarPrepend">$</InputGroup.Text>
            <Form.Control
              type="number"
              className="bg-transparent"
              value={drink_price}
              min="0"
              step=".01"
              onChange={(e) => setDrinkPrice(e.target.value)}
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
            id="cancel-add-drink-btn"
            variant="secondary"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            id="add-new-drink-btn"
            variant="primary"
            onClick={handleSubmit}
          >
            {" "}
            Add Item{" "}
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
}

export default AddDrinkForm;
