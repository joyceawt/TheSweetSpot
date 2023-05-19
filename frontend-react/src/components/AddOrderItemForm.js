import React, { useState } from "react";
import {
  bobaOptions,
  dairyOptions,
  iceLevelOptions,
  sugarLevelOptions,
} from "../utils/index";
import RadioButtonGroup from "./RadioButtonGroup";
import SelectDropdown from "./SelectDropdown";

function AddOrderItemForm({ drinkList, orderList, onAddOrderItem }) {
  const [order_id, setOrderID] = useState("");
  const [drink_id, setDrinkID] = useState("1");
  const [drink_quantity, setDrinkQuantity] = useState("");
  const [ice_level, setIceLevel] = useState("1");
  const [sugar_level, setSugarLevel] = useState("1");
  const [dairy_option, setDairyOption] = useState("1");
  const [boba_option, setBobaOption] = useState("1");

  const order_item = {
    order_id,
    drink_id,
    drink_quantity,
    ice_level,
    sugar_level,
    dairy_option,
    boba_option,
  };

  return (
    <>
      <form className="needs-validation">
        <div className="mb-3">
          <label
            id="customer_id"
            htmlFor="addItem-customer-ID"
            className="col-form-label"
          >
            Order ID:
          </label>
          <input
            type="number"
            className="form-control bg-transparent"
            id="addItem-customer-ID"
            value={order_id}
            onChange={(e) => setOrderID(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="add-drink-OI" className="col-form-label">
            Drink ID:
          </label>
          <SelectDropdown
            className={"form-select mb-3 bg-transparent"}
            ariaLabel={"drink_ID"}
            onChangeHandler={setDrinkID}
            id="add-drink-ID"
            name="drink_ID"
            selectOptions={drinkList}
            optionValue={"drink_id"}
            optionDisplay={"drink_name"}
            selectedOption={drink_id}
          ></SelectDropdown>
        </div>

        <div className="mb-3">
          <label htmlFor="addItem-drink-qty-label" className="col-form-label">
            Drink Qty:
          </label>
          <input
            type="number"
            className="form-control bg-transparent"
            id="addItem-qty-ID"
            value={drink_quantity}
            onChange={(e) => setDrinkQuantity(e.target.value)}
            required
          />
        </div>

        <RadioButtonGroup
          labelFor={"iceLevelSelection"}
          label={"Ice level:"}
          setSelectedOption={setIceLevel}
          radioOptions={iceLevelOptions}
          groupName={"iceLevel"}
          selectedOption={ice_level}
        />

        <RadioButtonGroup
          labelFor={"sugarLevelSelection"}
          label={"Sugar level:"}
          setSelectedOption={setSugarLevel}
          radioOptions={sugarLevelOptions}
          groupName={"sugarLevel"}
          selectedOption={sugar_level}
        />

        <RadioButtonGroup
          labelFor={"dairyOptionSelection"}
          label={"Dairy Option:"}
          setSelectedOption={setDairyOption}
          radioOptions={dairyOptions}
          groupName={"dairyOption"}
          selectedOption={dairy_option}
        />

        <RadioButtonGroup
          labelFor={"bobaOptionSelection"}
          label={"Boba Option:"}
          setSelectedOption={setBobaOption}
          radioOptions={bobaOptions}
          groupName={"bobaOption"}
          selectedOption={boba_option}
        />

        <div className="modal-footer">
          <button
            type="button"
            id="cancel-add-order-item-btn"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="submit"
            id="add-order-item-btn"
            className="btn btn-primary"
            data-bs-dismiss="modal"
            onClick={() => onAddOrderItem(order_item)}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default AddOrderItemForm;
