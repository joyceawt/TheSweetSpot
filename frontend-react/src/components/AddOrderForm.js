import React, { useState } from "react";
import DropDownCustomers from "./DropDownCustomers";
import SelectDropdown from "./SelectDropdown";

function AddOrderForm({ customerList, onAddOrder }) {
  const [customer_id, setCustomerID] = useState([]);
  const [order_date, setOrderDate] = useState([]);
  const [order_total, setTotal] = useState([]);

  const order = { customer_id, order_date, order_total };
  const handleCustomerSelection = (customer) => {
    setCustomerID(customer);
  };
  return (
    <>
      <form className="needs-validation">
        <div className="mb-3">
          <label htmlFor="add-customer-ID" className="col-form-label">
            Customer ID:
          </label>
          <SelectDropdown
            className={"form-select mb-3 bg-transparent"}
            ariaLabel={"customer_id"}
            onChangeHandler={handleCustomerSelection}
            id="add-customer-ID"
            name="customer_id"
            selectOptions={customerList}
            optionValue={"id"}
            optionDisplay={"name"}
            defaultFilterValue={"None"}
            selectedOption={setCustomerID}
          ></SelectDropdown>
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
