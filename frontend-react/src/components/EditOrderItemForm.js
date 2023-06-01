import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Modal } from "react-bootstrap";
import {
  bobaOptions,
  dairyOptions,
  iceLevelOptions,
  sugarLevelOptions,
} from "../utils/index";
import { RadioButtonGroup, SelectDropdown } from "./index";

function EditOrderItemForm({
  orderItem,
  onClickAction,
  drinkList,
  orderList,
  setShowModal,
}) {
  const [order_id, setSelectedOrderID] = useState(orderItem.order_id);
  const [drink_id, setSelectedDrinkID] = useState(orderItem.drink_id);
  const [drink_quantity, setSelectedDrinkQuantity] = useState(
    orderItem.drink_quantity
  );
  const [ice_level, setSelectedIceLevel] = useState(orderItem.ice_level);
  const [sugar_level, setSelectedSugarLevel] = useState(orderItem.sugar_level);
  const [dairy_option, setSelectedDairyOption] = useState(
    orderItem.dairy_option
  );
  const [boba_option, setSelectedBobaOption] = useState(orderItem.boba_option);
  const [order_items_id] = useState(orderItem.order_items_id);
  const [validated, setValidated] = useState(false);

  const closeModal = () => setShowModal(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      editOrderItem();
    }
  };

  const editOrderItem = async () => {
    try {
      await axios.put(
        `http://localhost:9124/api/order_items/${order_items_id}`,
        {
          order_id: order_id,
          drink_id: drink_id,
          ice_level: ice_level,
          sugar_level: sugar_level,
          dairy_option: dairy_option,
          boba_option: boba_option,
          drink_quantity: drink_quantity,
        }
      );
      onClickAction();
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  function changeOrderID(val) {
    setSelectedOrderID(val);
  }

  function changeSelectedDrinkID(val) {
    setSelectedDrinkID(val);
  }

  return (
    <>
      <Form
        id={"editOrderItem-" + order_items_id}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group
          className="mb-3"
          controlId={"editItem-customer-ID-" + order_items_id}
        >
          <Form.Label className="col-form-label">Order ID:</Form.Label>
          <SelectDropdown
            className={"form-select mb-3 bg-transparent"}
            ariaLabel={"order_ID"}
            onChangeHandler={changeOrderID}
            id={"edit-order-ID"}
            name={"order_ID"}
            selectOptions={orderList}
            optionValue={"order_id"}
            optionDisplay={"order_id"}
            selectedOption={order_id}
          ></SelectDropdown>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId={"edit-drink-OI-" + order_items_id}
        >
          <Form.Label className="col-form-label">Drink ID:</Form.Label>
          <SelectDropdown
            className={"form-select mb-3 bg-transparent"}
            ariaLabel={"drink_ID"}
            onChangeHandler={changeSelectedDrinkID}
            id={"edit-drink-ID"}
            name={"drink_ID"}
            selectOptions={drinkList}
            optionValue={"drink_id"}
            optionDisplay={"drink_name"}
            selectedOption={drink_id}
          ></SelectDropdown>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId={"edit-OI-drink-qty" + order_items_id}
        >
          <Form.Label className="col-form-label">Drink Qty:</Form.Label>
          <Form.Control
            type="number"
            name="edit-Item-drink-qty"
            className="bg-transparent"
            placeholder="Drink Name"
            value={drink_quantity}
            min="1"
            onChange={(e) => setSelectedDrinkQuantity(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid drink quantity.
          </Form.Control.Feedback>
        </Form.Group>

        <RadioButtonGroup
          groupID={"editIceLevelSelection"}
          uniqueID={order_items_id}
          label={"Ice level:"}
          setSelectedOption={setSelectedIceLevel}
          radioOptions={iceLevelOptions}
          groupName={"editIceLevel"}
          selectedOption={ice_level}
        />

        <RadioButtonGroup
          groupID={"editSugarLevelSelection"}
          uniqueID={order_items_id}
          label={"Sugar level:"}
          setSelectedOption={setSelectedSugarLevel}
          radioOptions={sugarLevelOptions}
          groupName={"editSugarLevel"}
          selectedOption={sugar_level}
        />

        <RadioButtonGroup
          groupID={"editDairyOptionSelection"}
          uniqueID={order_items_id}
          label={"Dairy Option:"}
          setSelectedOption={setSelectedDairyOption}
          radioOptions={dairyOptions}
          groupName={"editDairyOption"}
          selectedOption={dairy_option}
        />

        <RadioButtonGroup
          groupID={"editBobaOptionSelection"}
          uniqueID={order_items_id}
          label={"Boba Option:"}
          setSelectedOption={setSelectedBobaOption}
          radioOptions={bobaOptions}
          groupName={"editBobaOption"}
          selectedOption={boba_option}
        />

        <Modal.Footer>
          <Button
            type="button"
            id="cancel-edit-order-item-btn"
            variant="secondary"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button type="submit" id="save-edit-order-item-btn" variant="primary">
            {" "}
            Save{" "}
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
}

export default EditOrderItemForm;
