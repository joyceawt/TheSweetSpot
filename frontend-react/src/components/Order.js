import React, { useState } from "react";
import { ModalComponent, DeleteConfirm, EditOrderForm } from "./index";

function Order({ order, onEditOrder, onDeleteOrder, customerList }) {
  // set up unique ids
  let modalEdit = "edit-entry-" + order.order_id;
  let modalDelete = "delete-confirm-" + order.order_id;

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <tr>
        <td>
          {" "}
        </td>
        <td>{order.order_id}</td>
        <td>{order.customer_id ? order.customer_id : "N/A"}</td>
        <td>{order.name ? order.name : "None"}</td>
        <td>{order.order_date}</td>
        <td>{order.order_total}</td>
        <td>
          <ModalComponent
            trigger={modalEdit}
            buttonName={<i className="bi bi-pencil-square fs-5"></i>}
            btnClasses="btn btn-light mx-1"
            showModal={showEditModal}
            setShowModal={setShowEditModal}
            content={
              <EditOrderForm
                order={order}
                onClickAction={onEditOrder}
                customerList={customerList}
                setShowModal={setShowEditModal}
              />
            }
            title="Edit Order"
          />

          <ModalComponent
            trigger={modalDelete}
            buttonName={<i className="bi bi-trash fs-5"></i>}
            btnClasses="btn btn-light mx-1"
            showModal={showDeleteModal}
            setShowModal={setShowDeleteModal}
            content={
              <DeleteConfirm
                actionOnClick={onDeleteOrder}
                id={order.order_id}
                setShowModal={setShowDeleteModal}
              />
            }
            title="Delete Order?"
          />
        </td>
      </tr>
    </>
  );
}

export default Order;
