import React, { useState } from "react";
import axios from "axios";

export const EditCustomerForm = ({ customer, onClickAction, customerList }) => {
  const [name, setNewName] = useState(customer.name);
  const [phone, setNewPhone] = useState(customer.phone);
  const [customer_id] = useState(customer.customer_id);

  const editCustomer = async () => {
    try {
      const response = await axios.put(
        `http://localhost:9124/api/customers/${customer_id}`,
        {
          name: name,
          phone: phone,
        }
      );
      onClickAction();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="needs-validation bg-transparent">
        <div className="mb-3 d-flex">
          <label htmlFor="customer-ID" className="col-form-label">
            Customer ID:
          </label>
          <input
            type="text"
            className="form-control bg-transparent ms-2"
            id="customer-ID"
            autoFocus="autoFocus"
            style={{ width: "15%" }}
            value={customer_id}
            disabled
          />
        </div>

        <div className="mb-3">
          <label htmlFor="customer-name" className="col-form-label">
            Name:
          </label>
          <textarea
            className="form-control bg-transparent"
            id="customer-name"
            value={name}
            onChange={(e) => setNewName(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="customer-phone" className="col-form-label">
            Phone number:
          </label>
          <div className="input-group">
            <input
              type="number"
              className="form-control bg-transparent"
              id="customer-phone"
              value={phone}
              onChange={(e) => {
                setNewPhone(e.target.value);
              }}
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
            {" "}
            Cancel{" "}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-dismiss="modal"
            onClick={editCustomer}
          >
            {" "}
            Save{" "}
          </button>
        </div>
      </form>
    </>
  );
};

export default EditCustomerForm;
