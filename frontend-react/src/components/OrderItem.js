import React from 'react';
import Modal from '../components/Modal';
import DeleteConfirm from './DeleteConfirm';

import EditOrderItemForm from './EditOrderItemForm'

function OrderItem({orderItem, onEditOrderItem, onDeleteOrderItem}) {
   // unique IDs.
   let modalEdit = "edit-entry-item-" + orderItem.order_items_id;
   let modalDelete = "delete-item-confirm-" + orderItem.order_items_id;
   

   return (
    <>
        <tr>
            <td> <button class="btn btn-outline-dark "> <i class="bi bi-info-circle" /> </button> </td>
            <td>{orderItem.order_items_id}</td>
            <td>{orderItem.order_id}</td>
            <td>{orderItem.drink_id}</td>
            <td>{orderItem.drink_quantity}</td>
            <td>{orderItem.ice_level}</td>
            <td>{orderItem.sugar_level}</td>
            <td>{orderItem.dairy_option}</td>
            <td>{orderItem.boba_option}</td>
            <td>
                <Modal trigger = {modalEdit} buttonName={ <i class="bi bi-pencil-square fs-6"></i> } btnClasses="btn btn-outline-secondary" content={ <EditOrderItemForm orderItem={orderItem} onClickAction = {onEditOrderItem}/> } title="Edit OrderItem" />

                <Modal trigger = {modalDelete} buttonName={ <i class="bi bi-x-lg fs-6"></i> } btnClasses="btn btn-outline-danger" content={ < DeleteConfirm actionOnClick= {onDeleteOrderItem} id={orderItem.order_items_id}/> } title="Delete Entry?" />
            </td>
        </tr>
    </>
 );
}

export default OrderItem;