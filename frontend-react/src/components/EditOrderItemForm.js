import React, { useState } from "react";
import SelectDropdown from "./SelectDropdown";
import axios from "axios";

function EditOrderItemForm({ orderItem, onClickAction, drinkList, orderList }) {
  // setting these because each button needs a unique name and id.
  // for the names
  let uniqueIceID = "iceLevelEditOrderItem-" + orderItem.order_id;
  let uniqueSugarID = "sugarLevelEditOrderItem" + orderItem.order_id;
  let uniqueDairyOpt = "dairyOptionEditOrderItem" + orderItem.order_id;
  let uniqueBoba = "bobaOptionEditOrderItem" + orderItem.order_id;

  // just actual ID
  let unIce100 = "iceLevelOrdIt100-" + orderItem.order_id;
  let unIce50 = "iceLevelOrdIt50-" + orderItem.order_id;
  let unIce0 = "iceLevelOrdIt0-" + orderItem.order_id;
  let unSugar100 = "sugarLevelOrdIt100-" + orderItem.order_id;
  let unSugar50 = "sugarLevelOrdIt50-" + orderItem.order_id;
  let unSugar0 = "sugarLevelOrdIt0-" + orderItem.order_id;
  let unDairyY = "dairyOptionOrdItY-" + orderItem.order_id;
  let unDairyN = "dairyOptionOrdItN-" + orderItem.order_id;
  let unBobaY = "bobaOptionOrdItY-" + orderItem.order_id;
  let unBobaN = "bobaOptionOrdItN-" + orderItem.order_id;

  const [order_id, setorder_id] = useState(orderItem.order_id);
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

  function changeorder_id(val) {
    setorder_id(val);
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
            onChangeHandler={changeorder_id}
            id="edit-order-ID"
            name="order_ID"
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
            id="edit-drink-ID"
            name="drink_ID"
            selectOptions={drinkList}
            optionValue={"drink_id"}
            optionDisplay={"drink_name"}
            selectedOption={drink_id}
          ></SelectDropdown>
        </div>

        <div className="mb-3">
          <label htmlFor="addItem-customer-ID" className="col-form-label">
            Drink Qty:
          </label>
          <input
            type="number"
            className="form-control bg-transparent"
            id="edit-OrderItem-Drink-QTY"
            value={drink_quantity}
            onChange={(e) => setSelectedDrinkQuantity(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 pt-2">
          <label htmlFor={uniqueIceID} className="col-form-label w-25">
            Ice level:
          </label>
          <div className="btn-group">
            <input
              className="btn-check"
              type="radio"
              name={uniqueIceID}
              value="1"
              id={unIce100}
              onChange={(e) => setSelectedIceLevel(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor={unIce100}>
              100%
            </label>

            <input
              className="btn-check"
              type="radio"
              name={uniqueIceID}
              value="0.5"
              id={unIce50}
              onChange={(e) => setSelectedIceLevel(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor={unIce50}>
              50%
            </label>

            <input
              className="btn-check"
              type="radio"
              name={uniqueIceID}
              value="0"
              id={unIce0}
              onChange={(e) => setSelectedIceLevel(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor={unIce0}>
              0%
            </label>
          </div>
        </div>

        <div className="mb-3 pt-2">
          <label htmlFor={uniqueSugarID} className="col-form-label w-25">
            Sugar Level:
          </label>
          <div className="btn-group">
            <input
              className="btn-check"
              type="radio"
              name={uniqueSugarID}
              value="1"
              id={unSugar100}
              onChange={(e) => setSelectedSugarLevel(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor={unSugar100}>
              100%
            </label>

            <input
              className="btn-check"
              type="radio"
              name={uniqueSugarID}
              value="0.5"
              id={unSugar50}
              onChange={(e) => setSelectedSugarLevel(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor={unSugar50}>
              50%
            </label>

            <input
              className="btn-check"
              type="radio"
              name={uniqueSugarID}
              value="0"
              id={unSugar0}
              onChange={(e) => setSelectedSugarLevel(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor={unSugar0}>
              0%
            </label>
          </div>
        </div>

        <div className="mb-3 pt-2">
          <label htmlFor={uniqueDairyOpt} className="col-form-label w-25">
            Dairy Option:
          </label>
          <div className="btn-group">
            <input
              type="radio"
              className="btn-check"
              name={uniqueDairyOpt}
              id={unDairyY}
              value="1"
              onChange={(e) => setSelectedBobaOption(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor={unDairyY}>
              Dairy
            </label>

            <input
              type="radio"
              className="btn-check"
              name={uniqueDairyOpt}
              id={unDairyN}
              value="0"
              onChange={(e) => setSelectedBobaOption(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor={unDairyN}>
              Non-dairy
            </label>
          </div>
        </div>

        <div className="mb-3 pt-2 ">
          <label htmlFor={uniqueBoba} className="col-form-label  w-25">
            Boba Option:
          </label>

          <div className="btn-group">
            <input
              type="radio"
              className="btn-check"
              name={uniqueBoba}
              id={unBobaY}
              value="1"
              onChange={(e) => setSelectedBobaOption(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor={unBobaY}>
              Yes
            </label>

            <input
              type="radio"
              className="btn-check"
              name={uniqueBoba}
              id={unBobaN}
              value="0"
              onChange={(e) => setSelectedBobaOption(e.target.value)}
            />
            <label className="btn btn-outline-secondary" htmlFor={unBobaN}>
              No
            </label>
          </div>
        </div>

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
