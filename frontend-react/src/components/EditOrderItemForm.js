import React from "react";

function EditOrderItemForm({ orderItem, onClickAction }) {
  return (
    <>
      <form className="needs-validation">
        <div className="mb-3">
          <label htmlFor="addItem-customer-ID" className="col-form-label">
            Order ID:
          </label>
          <input
            type="text"
            className="form-control bg-transparent"
            id="edit-OrderItem-Order-ID"
            defaultValue={orderItem.order_id}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="addItem-customer-ID" className="col-form-label">
            Drink ID:
          </label>
          <input
            type="text"
            className="form-control bg-transparent"
            id="edit-OrderItem-Drink-ID"
            defaultValue={orderItem.drink_id}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="addItem-customer-ID" className="col-form-label">
            Drink Qty:
          </label>
          <input
            type="number"
            className="form-control bg-transparent"
            id="edit-OrderItem-Drink-QTY"
            defaultValue={orderItem.drink_quantity}
            required
          />
        </div>

        <div className="mb-3 pt-2">
          <label
            htmlFor="iceLevelEditOrderItem"
            className="col-form-label w-25"
          >
            Ice level:
          </label>
          <div className="btn-group">
            <input
              className="btn-check"
              type="radio"
              name="iceLevelEditOrderItem"
              value="1"
              id="iceLevelOrdIt100"
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="iceLevelOrdIt100"
            >
              100%
            </label>

            <input
              className="btn-check"
              type="radio"
              name="iceLevelEditOrderItem"
              value="0.5"
              id="iceLevelOrdIt50"
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="iceLevel5OrdIt0"
            >
              50%
            </label>

            <input
              className="btn-check"
              type="radio"
              name="iceLevelEditOrderItem"
              value=".25"
              id="iceLevelOrdIt0"
            />
            <label className="btn btn-outline-primary" htmlFor="iceLevelOrdIt0">
              0%
            </label>
          </div>
        </div>

        <div className="mb-3 pt-2">
          <label
            htmlFor="sugarLevelEditOrderItem"
            className="col-form-label w-25"
          >
            Sugar level:
          </label>
          <div className="btn-group">
            <input
              className="btn-check"
              type="radio"
              name="sugarLevelEditOrderItem"
              value="1"
              id="sugarLevelOrdIt100"
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="sugarLevelOrdIt100"
            >
              100%
            </label>

            <input
              className="btn-check"
              type="radio"
              name="sugarLevelEditOrderItem"
              value="0.5"
              id="sugarLevelOrdIt50"
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="sugarLevelOrdIt50"
            >
              50%
            </label>

            <input
              className="btn-check"
              type="radio"
              name="sugarLevelEditOrderItem"
              value=".25"
              id="sugarLevelOrdIt0"
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="sugarLevelOrdIt0"
            >
              0%
            </label>
          </div>
        </div>

        <div className="mb-3 pt-2">
          <label
            htmlFor="dairyOptionEditOrderItem"
            className="col-form-label w-25"
          >
            Dairy Option:
          </label>
          <div className="btn-group">
            <input
              type="radio"
              className="btn-check"
              name="dairyOptionEditOrderItem"
              id="dairyOptionOrdItYes"
              value="1"
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="dairyOptionOrdItYes"
            >
              Dairy
            </label>

            <input
              type="radio"
              className="btn-check"
              name="dairyOptionEditOrderItem"
              id="dairyOptionOrdItNo"
              value="0"
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="dairyOptionOrdItNo"
            >
              Non-dairy
            </label>
          </div>
        </div>

        <div className="mb-3 pt-2 ">
          <label
            htmlFor="bobaOptionEditOrderItem"
            className="col-form-label  w-25"
          >
            Boba Option:
          </label>

          <div className="btn-group">
            <input
              type="radio"
              className="btn-check"
              name="bobaOptionEditOrderItem"
              id="bobaOptionOrdItYes"
              value="1"
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="bobaOptionOrdItYes"
            >
              Yes
            </label>

            <input
              type="radio"
              className="btn-check"
              name="bobaOptionEditOrderItem"
              id="bobaOptionOrdItNo"
              value="0"
            />
            <label
              className="btn btn-outline-secondary"
              htmlFor="bobaOptionOrdItNo"
            >
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
            type="button"
            className="btn btn-primary"
            onClick={() => onClickAction(orderItem.order_items_id)}
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
