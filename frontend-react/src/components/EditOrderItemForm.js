import React, { useState } from "react";
import RadioButtonGroup from "./RadioButtonGroup";
import SelectDropdown from "./SelectDropdown";
import axios from "axios";
import {
  bobaOptions,
  dairyOptions,
  iceLevelOptions,
  sugarLevelOptions,
} from "../utils/index";

function EditOrderItemForm({ orderItem, onClickAction, drinkList, orderList }) {
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
      <form className="needs-validation">
        <div className="mb-3">
          <label htmlFor="addItem-customer-ID" className="col-form-label">
            Order ID:
          </label>
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
        </div>

        <div className="mb-3">
          <label htmlFor="addItem-customer-ID" className="col-form-label">
            Drink ID:
          </label>
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
        </div>

        <div className="mb-3">
          <label htmlFor="editIODrinkQty" className="col-form-label">
            Drink Qty:
          </label>
          <input
            type="number"
            className="form-control bg-transparent"
            id="editIODrinkQty"
            value={drink_quantity}
            onChange={(e) => setSelectedDrinkQuantity(e.target.value)}
            required
          />
        </div>

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

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            id="cancel-edit-order-item-btn"
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-dismiss="modal"
            onClick={editOrderItem}
            id="save-edit-order-item-btn"
          >
            {" "}
            Save{" "}
          </button>
        </div>
      </form>
    </>
  );
}

export default EditOrderItemForm;
