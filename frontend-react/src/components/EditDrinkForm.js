import React, { useState } from "react";
import axios from "axios";

export const EditDrinkForm = ({ drinkItem, onClickAction }) => {
  // for unique IDs
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

  const editDrink = async () => {
    try {
      await axios.put(`http://localhost:9124/api/drinks/${drink_id}`, {
        drink_name: drink_name,
        drink_description: drink_description,
        drink_price: drink_price,
      });
      onClickAction();
    } catch (err) {
      console.log(err);
    }
  };

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
            id={drinkNameId}
            autoFocus="autoFocus"
            value={drink_name}
            onChange={(e) => setNewDrinkName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="add-description" className="col-form-label">
            Description:
          </label>
          <textarea
            className="form-control bg-transparent"
            id={drinkDescriptionId}
            autoFocus="autoFocus"
            value={drink_description}
            onChange={(e) => setNewDrinkDescription(e.target.value)}
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
              id={drinkPriceId}
              autoFocus="autoFocus"
              value={drink_price}
              onChange={(e) => setNewDrinkPrice(e.target.value)}
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
            id={drinkBtnId}
            data-bs-dismiss="modal"
            onClick={editDrink}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default EditDrinkForm;
