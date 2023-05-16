import React, { useState } from "react";

function AddCustomerForm({ onAddCust }) {
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);

  const customer = { name, phone };

  return (
    <>
      <form className="needs-validation">
        <div className="mb-3">
          <label htmlFor="add-description" className="col-form-label">
            Customer Name:
          </label>
          <input
            className="form-control bg-transparent"
            id="add-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="add-date" className="col-form-label">
            Phone number
          </label>
          <input
            type="text"
            className="form-control bg-transparent"
            id="add-phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required
          />
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
            onClick={() => onAddCust(customer)}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default AddCustomerForm;
