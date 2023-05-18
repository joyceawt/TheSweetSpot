import React, { useState } from "react";

function AddOrderItemForm({ drinkList, orderList, onAddOrderItem }) {
  const [order_id, setOrderID] = useState("");
  const [drink_id, setDrinkID] = useState("");
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
          <label
            id="drink_id"
            htmlFor="addItem-customer-ID"
            className="col-form-label"
          >
            Drink ID:
          </label>
          <input
            type="number"
            className="form-control bg-transparent"
            id="addItem-customer-ID"
            value={drink_id}
            onChange={(e) => setDrinkID(e.target.value)}
            required
          />
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

        <div className="mb-3 pt-2">
          <label htmlFor="iceLevel" className="col-form-label w-25">
            Ice level:
          </label>
          <div className="btn-group">
            <input
              className="btn-check"
              type="radio"
              name="iceLevel"
              value="1"
              id="iceLevel100"
              checked
            />
            <label className="btn btn-outline-primary" htmlFor="iceLevel100">
              100%
            </label>

            <input
              className="btn-check"
              type="radio"
              name="iceLevel"
              value="0.5"
              id="iceLevel50"
            />
            <label className="btn btn-outline-primary" htmlFor="iceLevel50">
              50%
            </label>

            <input
              className="btn-check"
              type="radio"
              name="iceLevel"
              value=".25"
              id="iceLevel0"
            />
            <label className="btn btn-outline-primary" htmlFor="iceLevel0">
              0%
            </label>
          </div>
        </div>

        <div className="mb-3 pt-2">
          <label htmlFor="sugarLevel" className="col-form-label w-25">
            Sugar level:
          </label>
          <div className="btn-group">
            <input
              className="btn-check"
              type="radio"
              name="sugarLevel"
              value="1"
              id="sugarLevel100"
              checked
            />
            <label className="btn btn-outline-primary" htmlFor="sugarLevel100">
              100%
            </label>

            <input
              className="btn-check"
              type="radio"
              name="sugarLevel"
              value="0.5"
              id="sugarLevel50"
            />
            <label className="btn btn-outline-primary" htmlFor="sugarLevel50">
              50%
            </label>

            <input
              className="btn-check"
              type="radio"
              name="sugarLevel"
              value=".25"
              id="sugarLevel0"
            />
            <label className="btn btn-outline-primary" htmlFor="sugarLevel0">
              0%
            </label>
          </div>
        </div>

        <div className="mb-3 pt-2">
          <label htmlFor="dairyOption" className="col-form-label w-25">
            Dairy Option:
          </label>
          <div className="btn-group">
            <input
              type="radio"
              className="btn-check"
              name="dairyOption"
              id="dairyOptionYes"
              value="1"
              checked
            />
            <label className="btn btn-outline-primary" htmlFor="dairyOptionYes">
              Dairy
            </label>

            <input
              type="radio"
              className="btn-check"
              name="dairyOption"
              id="dairyOptionNo"
              value="0"
            />
            <label className="btn btn-outline-primary" htmlFor="dairyOptionNo">
              Non-dairy
            </label>
          </div>
        </div>

        <div className="mb-3 pt-2 ">
          <label htmlFor="bobaOption" className="col-form-label  w-25">
            Boba Option:
          </label>

          <div className="btn-group">
            <input
              type="radio"
              className="btn-check"
              name="bobaOption"
              id="bobaOptionYes"
              value="1"
              checked
            />
            <label className="btn btn-outline-primary" htmlFor="bobaOptionYes">
              Yes
            </label>

            <input
              type="radio"
              className="btn-check"
              name="bobaOption"
              id="bobaOptionNo"
              value="0"
            />
            <label className="btn btn-outline-secondary" htmlFor="bobaOptionNo">
              No
            </label>
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="submit"
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
