import React, { useState } from "react";

function AddDrinkForm({ onAddDrink }) {
  const [drink_name, setDrinkName] = useState([]);
  const [drink_description, setDrinkDescription] = useState([]);
  const [drink_price, setDrinkPrice] = useState([]);

  const drink = { drink_name, drink_description, drink_price };

  return (
    <form className="needs-validation">
      <div className="mb-3">
        <label htmlFor="add-drink-name" className="col-form-label">
          Drink Name:
        </label>
        <input
          type="text"
          className="form-control bg-transparent"
          id="add-drink-name"
          value={drink_name}
          onChange={(e) => setDrinkName(e.target.value)}
          autoFocus
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="add-description" className="col-form-label">
          Description:
        </label>
        <textarea
          className="form-control bg-transparent"
          id="add-description"
          value={drink_description}
          onChange={(e) => setDrinkDescription(e.target.value)}
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
            id="add-price"
            value={drink_price}
            onChange={(e) => {
              setDrinkPrice(e.target.value);
            }}
            required
          />
        </div>
      </div>

      <div className="modal-footer ">
        <button
          type="button"
          id="cancel-add-drink-btn"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          id="add-new-drink-btn"
          onClick={() => onAddDrink(drink)}
        >
          Add item
        </button>
      </div>
    </form>
  );
}

export default AddDrinkForm;
