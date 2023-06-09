import React, { useState } from "react";
import { ModalComponent, DeleteConfirm, EditCustomerForm } from "./index";

function Customer({ customer, onEditCust, onDeleteCust }) {
  // unique IDs.
  let modalEdit = "edit-entry-" + customer.customer_id;
  let modalDelete = "delete-confirm-" + customer.customer_id;
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <tr>
        <td>{customer.customer_id}</td>
        <td>{customer.name}</td>
        <td>{customer.phone}</td>
        <td>
          <ModalComponent
            trigger={modalEdit}
            buttonName={<i className="bi bi-pencil-square fs-5"></i>}
            btnClasses="btn btn-light mx-1"
            showModal={showEditModal}
            setShowModal={setShowEditModal}
            content={
              <EditCustomerForm
                customer={customer}
                onClickAction={onEditCust}
                setShowModal={setShowEditModal}
              />
            }
            title="Edit Customer"
          />

          <ModalComponent
            trigger={modalDelete}
            buttonName={<i className="bi bi-trash fs-5"></i>}
            btnClasses="btn btn-light mx-1"
            showModal={showDeleteModal}
            setShowModal={setShowDeleteModal}
            content={
              <DeleteConfirm
                actionOnClick={onDeleteCust}
                id={customer.customer_id}
                setShowModal={setShowDeleteModal}
              />
            }
            title="Delete Customer?"
          />
        </td>
      </tr>
    </>
  );
}

export default Customer;
