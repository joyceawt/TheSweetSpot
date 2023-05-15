import React from "react";

function EditOrderForm({ order, onClickAction }) {
  // we may need to pass in a 'state' from here, OR: create a new object and pass it to onClickAction..

  return (
    <>
      <form className="needs-validation">
        <div className="mb-3">
          <label htmlFor="add-customer-ID" className="col-form-label">
            Customer ID:
          </label>
          <input
            type="text"
            className="form-control bg-transparent"
            id="add-customer-ID"
            defaultValue={order.customer_id}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="add-date" className="col-form-label">
            Order date:
          </label>
          <input
            type="text"
            className="form-control bg-transparent"
            id="add-date"
            defaultValue={order.order_date}
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
            defaultValue={order.order_total}
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
            onClick={() => onClickAction(order.order_id)}
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
