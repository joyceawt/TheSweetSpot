import React from "react";

function EditCustomerForm({ customer, onClickAction, setName, setPhoneNumber}) {

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
            value={customer.customer_id}
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
            defaultValue={customer.name}
            onChange={(e)=>setName(e)}
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
              onChange={(e)=>setPhoneNumber(e)}
              defaultValue={customer.phone}
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
            onClick={() => onClickAction(customer.customer_id)}
          >
            {" "}
            Save{" "}
          </button>
        </div>
      </form>
    </>
  );
}

export default EditCustomerForm;
