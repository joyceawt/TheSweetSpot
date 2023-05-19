import React, { useState } from "react";
import SelectDropdown from "./SelectDropdown";
import axios from "axios";

function EditOrderForm({ order, onClickAction, customerList }) {
  const [customer_id, setNewCustomerID] = useState(order.customer_id);
  const [order_date, setNewOrderDate] = useState(order.order_date);
  const [order_total, setNewTotal] = useState(order.order_total);
  const [order_id] = useState(order.order_id);

  const editOrder = async () => {
    try {
      await axios.put(`http://localhost:9124/api/orders/${order_id}`, {
        customer_id: customer_id,
        order_date: order_date,
        order_total: order_total,
      });
      onClickAction();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCustomerSelection = (customer) => {
    setNewCustomerID(customer);
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
            id={"edit-customer-ID"}
            name={"customer_id"}
            selectOptions={customerList}
            optionValue={"customer_id"}
            optionDisplay={"name"}
            selectedOption={customer_id}
          ></SelectDropdown>
        </div>

        <div className="mb-3">
          <label htmlFor="add-date" className="col-form-label">
            Order date:
          </label>
          <input
            type="date-time-local"
            className="form-control bg-transparent"
            id="add-date"
            value={order.order_date}
            onChange={(e) => setNewOrderDate(e.target.value)}
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
            value={order_total}
            step="0.01"
            onChange={(e) => setNewTotal(e.target.value)}
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
            type="button"
            className="btn btn-primary"
            data-bs-dismiss="modal"
            onClick={editOrder}
          >
            {" "}
            Save{" "}
          </button>
        </div>
      </form>
    </>
  );
}

export default EditOrderForm;
