import React from "react";

function AddDrinkForm({ onSubmit }) {
  // action="/add-new-drink" method="post"
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
          autoFocus="autoFocus"
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
          autoFocus="autoFocus"
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
            autoFocus="autoFocus"
            oninput="inputValidator('add-price', this)"
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
          type="submit"
          className="btn btn-primary"
          id="add-new-drink-btn"
        >
          Add item
        </button>
      </div>
    </form>
  );
}

export default AddDrinkForm;