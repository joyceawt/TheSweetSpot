import React from "react";
import Modal from "../components/Modal";
import DeleteConfirm from "./DeleteConfirm";

import EditOrderForm from "./EditOrderForm";

function Order({
  order,
  onEditOrder,
  onDeleteOrder,
  setCustomerID,
  setOrderDate,
  setTotal,
  customerList
}) {
  // unique IDs.
  let modalEdit = "edit-entry-" + order.order_id;
  let modalDelete = "delete-confirm-" + order.order_id;

  // grab 

  return (
    <>
      <tr>
        <td>
          {" "}
          <button className="btn btn-outline-dark ">
            {" "}
            <i className="bi bi-info-circle" />{" "}
          </button>{" "}
        </td>
        <td>{order.order_id}</td>
        <td>{order.customer_id}</td>
        <td>{order.order_date}</td>
        <td>{order.order_total}</td>
        <td>
          <Modal
            trigger={modalEdit}
            buttonName={<i className="bi bi-pencil-square fs-6"></i>}
            btnClasses="btn btn-outline-secondary"
            content={
              <EditOrderForm
                order={order}
                onClickAction={onEditOrder}
                setCustomerID={setCustomerID}
                setOrderDate={setOrderDate}
                setTotal={setTotal}
                customerList={customerList}
              />
            }
            title="Edit Order"
          />

          <Modal
            trigger={modalDelete}
            buttonName={<i className="bi bi-x-lg fs-6"></i>}
            btnClasses="btn btn-outline-danger"
            content={
              <DeleteConfirm
                actionOnClick={onDeleteOrder}
                id={order.order_id}
              />
            }
            title="Delete Entry?"
          />
        </td>
      </tr>
    </>
  );
}

export default Order;
