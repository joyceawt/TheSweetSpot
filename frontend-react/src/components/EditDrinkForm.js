import React, { useState } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import axios from "axios";

export const EditDrinkForm = ({ drinkItem, onClickAction, setShowModal }) => {
  const drinkNameId = "edit-drink-name-" + drinkItem.drink_id;
  const drinkDescriptionId = "edit-description-" + drinkItem.drink_id;
  const drinkPriceId = "edit-price-" + drinkItem.drink_id;
  const drinkBtnId = "edit-drink-btn-" + drinkItem.drink_id;

  const [drink_name, setNewDrinkName] = useState(drinkItem.drink_name);
  const [drink_description, setNewDrinkDescription] = useState(
    drinkItem.drink_description
  );
  const [drink_price, setNewDrinkPrice] = useState(drinkItem.drink_price);
  const [drink_id] = useState(drinkItem.drink_id);
  const [validated, setValidated] = useState(false);

  const closeModal = () => setShowModal(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);
      editDrink();
    }
  };

  const editDrink = async () => {
    try {
      await axios.put(`http://localhost:9124/api/drinks/${drink_id}`, {
        drink_name: drink_name,
        drink_description: drink_description,
        drink_price: drink_price,
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
        id={"editDrinkForm-" + drink_id}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3 d-flex" controlId={"drink-ID-" + drink_id}>
          <Form.Label className="col-form-label">Drink ID:</Form.Label>
          <Form.Control
            type="text"
            className="bg-transparent ms-2"
            placeholder="Name"
            style={{ width: "15%" }}
            value={drink_id}
            required
            disabled
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId={drinkNameId}>
          <Form.Label className="col-form-label">Drink Name:</Form.Label>
          <Form.Control
            className="bg-transparent"
            type="text"
            onChange={(e) => setNewDrinkName(e.target.value)}
            value={drink_name}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid drink name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId={drinkDescriptionId}>
          <Form.Label className="col-form-label">Description:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            className="bg-transparent"
            value={drink_description}
            onChange={(e) => setNewDrinkDescription(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid drink description.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId={drinkPriceId}>
          <Form.Label className="col-form-label">Price:</Form.Label>
          <InputGroup className="mb-3" hasValidation>
            <InputGroup.Text id="dollarPrepend">$</InputGroup.Text>
            <Form.Control
              type="number"
              className="bg-transparent"
              value={drink_price}
              min="1"
              step=".01"
              onChange={(e) => setNewDrinkPrice(e.target.value)}
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
            id={"cancel-edit-drink-" + { drink_id }}
            variant="secondary"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            id={drinkBtnId}
            variant="primary"
            onClick={handleSubmit}
          >
            {" "}
            Save{" "}
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default EditDrinkForm;
