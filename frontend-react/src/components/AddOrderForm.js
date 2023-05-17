import React from "react";
import DropDownCustomers from "./DropDownCustomers";

function AddOrderForm({customerList}) {
  //action="/add-new-order" method="post"
  return (
    <>
      <form className="needs-validation">
        <div className="mb-3">
          <label htmlFor="add-customer-ID" className="col-form-label">
            Customer ID:
          </label>
          <select className="form-select mb-3 bg-transparent" 
          name="customer_id" 
          id="add-customer-ID" 
          aria-label ="customer_id">
          
            <option value=""> None </option>
            {customerList.map((customer, i) => (
                  <DropDownCustomers
                  customerList={customer}
                  />
            ))}

          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="add-date" className="col-form-label">
            Order date:
          </label>
          <input
            type="text"
            className="form-control bg-transparent"
            id="add-date"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="add-total-price" className="col-form-label">
            Total price:
          </label>
          <input
            type="number"
            className="form-control bg-transparent"
            id="add-total-price"
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
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default AddOrderForm;
