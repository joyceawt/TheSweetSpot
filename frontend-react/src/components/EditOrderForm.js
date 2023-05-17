import React, {useState} from "react";
import DropDownCustomers from "./DropDownCustomers";

function EditOrderForm({ order, onClickAction, setCustomerID, setOrderDate, setTotal, customerList }) {
  ///  defaultValue={order.customer_id}
  
  // had to add local states here to be able to ensure that the <select> option is actually able to load defaults and to also change when a user selects a different option.
  // REACT does not support selected in the option tags: https://react.dev/reference/react-dom/components/select#providing-an-initially-selected-option

  
  const [selectedID, setSelectedID] = useState(order.customer_id);

  function changeSelectedID(val){
    setSelectedID(val);
    setCustomerID(val);
  }

  return (
    <>
      <form className="needs-validation">
        <div className="mb-3">
          <label htmlFor="add-customer-ID" className="col-form-label">
            Customer ID:
          </label>

          <select 
              className="form-select mb-3 bg-transparent" 
              name="customer_id" 
              id="edit-customer-ID" 
              aria-label ="customer_id"
              value={selectedID}
              onChange={ (e) => changeSelectedID(e.target.value) }
          >

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
            defaultValue={order.order_date}
            onChange={(e)=>setOrderDate(e)}
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
            onChange={(e)=>setTotal(e)}
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
