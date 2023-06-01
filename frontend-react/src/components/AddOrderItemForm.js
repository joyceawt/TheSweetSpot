import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import {
  bobaOptions,
  dairyOptions,
  iceLevelOptions,
  sugarLevelOptions,
} from "../utils/index";
import { RadioButtonGroup, SelectDropdown } from "./index";

function AddOrderItemForm({ drinkList, onAddOrderItem, setShowModal }) {
  const [order_id, setOrderID] = useState("");
  const [drink_id, setDrinkID] = useState("1");
  const [drink_quantity, setDrinkQuantity] = useState("1");
  const [ice_level, setIceLevel] = useState("1");
  const [sugar_level, setSugarLevel] = useState("1");
  const [dairy_option, setDairyOption] = useState("1");
  const [boba_option, setBobaOption] = useState("1");
  const [validated, setValidated] = useState(false);

  const order_item = {
    order_id,
    drink_id,
    drink_quantity,
    ice_level,
    sugar_level,
    dairy_option,
    boba_option,
  };

  const closeModal = () => setShowModal(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      onAddOrderItem(order_item);
      closeModal();
    }
  };

  return (
    <>
      <Form
        id="addOrderItem"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="addItem-order-ID">
          <Form.Label className="col-form-label">Order ID:</Form.Label>
          <Form.Control
            type="number"
            name="addItem-order-ID"
            className="bg-transparent"
            value={order_id}
            min="1"
            onChange={(e) => setOrderID(e.target.value)}
            required
            autoFocus
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid order ID.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="add-drink-OI">
          <Form.Label className="col-form-label">Drink ID:</Form.Label>
          <SelectDropdown
            className={"form-select mb-3 bg-transparent"}
            ariaLabel={"drink_ID"}
            onChangeHandler={setDrinkID}
            id={"add-drink-OI"}
            name="drink_ID"
            selectOptions={drinkList}
            optionValue={"drink_id"}
            optionDisplay={"drink_name"}
            selectedOption={drink_id}
          ></SelectDropdown>
        </Form.Group>

        <Form.Group className="mb-3" controlId="addItem-drink-qty">
          <Form.Label className="col-form-label">Drink Qty:</Form.Label>
          <Form.Control
            type="number"
            name="addItem-drink-qty"
            className="bg-transparent"
            placeholder="Drink Name"
            value={drink_quantity}
            min="1"
            onChange={(e) => setDrinkQuantity(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid drink quantity.
          </Form.Control.Feedback>
        </Form.Group>

        <RadioButtonGroup
          groupID={"iceLevelSelection"}
          label={"Ice level:"}
          setSelectedOption={setIceLevel}
          radioOptions={iceLevelOptions}
          groupName={"iceLevel"}
          selectedOption={ice_level}
        />

        <RadioButtonGroup
          groupID={"sugarLevelSelection"}
          label={"Sugar level:"}
          setSelectedOption={setSugarLevel}
          radioOptions={sugarLevelOptions}
          groupName={"sugarLevel"}
          selectedOption={sugar_level}
        />

        <RadioButtonGroup
          groupID={"dairyOptionSelection"}
          label={"Dairy Option:"}
          setSelectedOption={setDairyOption}
          radioOptions={dairyOptions}
          groupName={"dairyOption"}
          selectedOption={dairy_option}
        />

        <RadioButtonGroup
          groupID={"bobaOptionSelection"}
          label={"Boba Option:"}
          setSelectedOption={setBobaOption}
          radioOptions={bobaOptions}
          groupName={"bobaOption"}
          selectedOption={boba_option}
        />

        <Modal.Footer>
          <Button
            type="button"
            id="cancel-add-order-item-btn"
            variant="secondary"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button type="submit" id="add-order-item-btn" variant="primary">
            {" "}
            Add{" "}
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
}

export default AddOrderItemForm;
