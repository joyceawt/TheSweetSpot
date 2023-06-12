import React, { useState } from "react";
import { ModalComponent, DeleteConfirm, EditOrderItemForm } from "./index";

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
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <tr>
        <td>
          {" "}
        </td>
        <td>{orderItem.order_items_id}</td>
        <td>{orderItem.order_id}</td>
        <td>{orderItem.drink_id}</td>
        <td>{orderItem.drink_name}</td>
        <td>{orderItem.drink_quantity}</td>
        <td>{orderItem.ice_level.toFixed(2)}</td>
        <td>{orderItem.sugar_level.toFixed(2)}</td>
        <td>{orderItem.dairy_option === 1 ? "Yes" : "No"}</td>
        <td>{orderItem.boba_option === 1 ? "Yes" : "No"}</td>
        <td>
          <ModalComponent
            trigger={modalEdit}
            buttonName={<i className="bi bi-pencil-square fs-5"></i>}
            btnClasses="btn btn-light mx-1"
            showModal={showEditModal}
            setShowModal={setShowEditModal}
            content={
              <EditOrderItemForm
                orderItem={orderItem}
                onClickAction={onEditOrderItem}
                drinkList={drinkList}
                orderList={orderList}
                setShowModal={setShowEditModal}
              />
            }
            title="Edit OrderItem"
          />

          <ModalComponent
            trigger={modalDelete}
            buttonName={<i className="bi bi-trash fs-5"></i>}
            btnClasses="btn btn-light mx-1"
            showModal={showDeleteModal}
            setShowModal={setShowDeleteModal}
            content={
              <DeleteConfirm
                actionOnClick={onDeleteOrderItem}
                id={orderItem.order_items_id}
                setShowModal={setShowDeleteModal}
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
