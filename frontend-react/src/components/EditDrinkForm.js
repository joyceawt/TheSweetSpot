import React from "react";

function EditDrinkForm({ drinkItem, onClickAction }) {
  // for unique IDs
  let drinkName = "edit-drink-name-" + drinkItem.drink_id;
  let drinkDescription = "edit-description-" + drinkItem.drink_id;
  let drinkPrice = "edit-price-" + drinkItem.drink_id;
  let drinkBtn = "edit-drink-btn-" + drinkItem.drink_id;

  return (
    <>
      <form className="needs-validation">
        <div className="mb-3">
          <label htmlFor="add-drink-name" className="col-form-label">
            Drink Name:
          </label>
          <input
            type="text"
            className="form-control bg-transparent"
            id={drinkName}
            autoFocus="autoFocus"
            defaultValue={drinkItem.drink_name}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="add-description" className="col-form-label">
            Description:
          </label>
          <textarea
            className="form-control bg-transparent"
            id={drinkDescription}
            autoFocus="autoFocus"
            defaultValue={drinkItem.drink_description}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="add-price" className="col-form-label">
            Price:
          </label>
          <div className="input-group">
            <span className="input-group-text ">$</span>
            <input
              type="number"
              className="form-control bg-transparent"
              id={drinkPrice}
              autoFocus="autoFocus"
              defaultValue={drinkItem.drink_price}
              required
            />
          </div>
        </div>

        <div className="modal-footer ">
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
            id={drinkBtn}
            onClick={() => onClickAction(drinkItem.drink_id)}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default EditDrinkForm;
