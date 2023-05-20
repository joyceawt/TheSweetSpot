import React from "react";
import Modal from "../components/Modal";
import DeleteConfirm from "./DeleteConfirm";

import EditCustomerForm from "./EditCustomerForm";

function Customer({ customer, onEditCust, onDeleteCust }) {
  // unique IDs.
  let modalEdit = "edit-entry-" + customer.customer_id;
  let modalDelete = "delete-confirm-" + customer.customer_id;

  return (
    <>
      <tr>
        <td>
          <button className="btn btn-inverse ">
            {" "}
            <i className="bi bi-info-circle"></i>
          </button>
        </td>
        <td>{customer.customer_id}</td>
        <td>{customer.name}</td>
        <td>{customer.phone}</td>
        <td>
          <Modal
            trigger={modalEdit}
            buttonName={<i className="bi bi-pencil-square fs-5"></i>}
            btnClasses="btn btn-light mx-1"
            content={
              <EditCustomerForm
                customer={customer}
                onClickAction={onEditCust}
              />
            }
            title="Edit Customer"
          />

          <Modal
            trigger={modalDelete}
            buttonName={<i className="bi bi-trash fs-5"></i>}
            btnClasses="btn btn-light mx-1"
            content={
              <DeleteConfirm
                actionOnClick={onDeleteCust}
                id={customer.customer_id}
              />
            }
            title="Delete Entry?"
          />
        </td>
      </tr>
    </>
  );
}

export default Customer;
