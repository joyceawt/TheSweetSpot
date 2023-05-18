import React from "react";
import Modal from "../components/Modal";
import DeleteConfirm from "./DeleteConfirm";

import EditOrderItemForm from "./EditOrderItemForm";

function OrderItem({
  orderItem,
  onEditOrderItem,
  onDeleteOrderItem,
  drinkList,
  orderList,
}) {
  // unique IDs.
  let modalEdit = "edit-entry-item-" + orderItem.order_items_id;
  let modalDelete = "delete-item-confirm-" + orderItem.order_items_id;

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
        <td>{orderItem.order_items_id}</td>
        <td>{orderItem.order_id}</td>
        <td>{orderItem.drink_id}</td>
        <td>{orderItem.drink_quantity}</td>
        <td>{orderItem.ice_level}</td>
        <td>{orderItem.sugar_level}</td>
        <td>{orderItem.dairy_option == 1 ? "Yes" : "No"}</td>
        <td>{orderItem.boba_option == 1 ? "Yes" : "No"}</td>
        <td>
          <Modal
            trigger={modalEdit}
            buttonName={<i className="bi bi-pencil-square fs-6"></i>}
            btnClasses="btn btn-outline-secondary"
            content={
              <EditOrderItemForm
                orderItem={orderItem}
                onClickAction={onEditOrderItem}
                drinkList={drinkList}
                orderList={orderList}
              />
            }
            title="Edit OrderItem"
          />

          <Modal
            trigger={modalDelete}
            buttonName={<i className="bi bi-x-lg fs-6"></i>}
            btnClasses="btn btn-outline-danger"
            content={
              <DeleteConfirm
                actionOnClick={onDeleteOrderItem}
                id={orderItem.order_items_id}
              />
            }
            title="Delete Entry?"
          />
        </td>
      </tr>
    </>
  );
}

export default OrderItem;
