import React, {useEffect, useState} from 'react';
import UtilityBar from '../components/UtilityBar';
import Modal from '../components/Modal'
import OrderForm from '../components/AddOrderForm';
import AddOrderItemForm from '../components/AddOrderItemForm';

import OrderList from '../components/OrderList';
import OrderItemList from '../components/OrderItemList'

//DELETE THE STATIC DATA BELOW WHEN CONNECTED TO DB!!
import orderData from '../data/orderdata'
import orderitemsdata from '../data/orderitemsdata'
function OrdersPage() {

    const [orderList, setOrderList] = useState([]);
    const [orderItemList, setOrderItemList] = useState([]);
    // load all.
    const loadAllOrders = async () => {
        setOrderList(orderData);
        setOrderItemList(orderitemsdata);
      //const response = await fetch('/log');
      //const dataOrders = await response.json();
      //setOrderList(dataOrders);
    } 
    // UPDATE a single order
    const onEditOrder = async _id => {
      console.log("onEdit from OrdersPage. the id was: ", _id)

    }

    // DELETE a single customer!. 
    const onDeleteOrder = async _id => {
      console.log("onDelete from OrdersPage. the id was: ", _id)
      /*
      const response = await fetch(`/log/${drink_id}`, { method: 'DELETE' });
      if (response.status === 204) {
          const getResponse = await fetch('/log');
          const currentDrinkList = await getResponse.json();
          setDrinkList(currentDrinkList);
      } else {
          console.error(`Failed to delete drink with _id = ${drink_id}, status code = ${response.status}`)
      }
      */
    }  


    // UPDATE a single order
    const onEditOrderItem = async _id => {
      console.log("onEditOrderItem. id: ", _id)

    }

    // DELETE a single customer!. 
    const onDeleteOrderItem = async _id => {
      console.log("onDeleteOrderItem. id: ", _id)
      /*
      const response = await fetch(`/log/${drink_id}`, { method: 'DELETE' });
      if (response.status === 204) {
          const getResponse = await fetch('/log');
          const currentDrinkList = await getResponse.json();
          setDrinkList(currentDrinkList);
      } else {
          console.error(`Failed to delete drink with _id = ${drink_id}, status code = ${response.status}`)
      }
      */
    }  
    // LOAD all subscriptions
    useEffect(() => {
        loadAllOrders();
    }, []);

    let OrderModal = <Modal key="AddOrder" trigger="add-order"  buttonName= { <i className="bi bi-plus-lg fs-4"/>} btnClasses="btn btn-light btn-outline-primary" content={ <OrderForm /> } title="Add a new Order"/> ;

    let OrderItemModal = <Modal key="AddOrderItem" trigger="add-order-item" buttonName={ <i className="bi bi-plus-lg fs-4"/>} btnClasses="btn btn-light btn-outline-primary" content={ <AddOrderItemForm /> } title="Add a new Order Item"/> ;

    return (
         <>
            <UtilityBar key="AddOrder" contentTitle="Orders" addModal={OrderModal}></UtilityBar>
            <article>
                <OrderList orderList = {orderList} onEditOrder={onEditOrder} onDeleteOrder={onDeleteOrder}/>
            </article>

            
            <UtilityBar key="AddOrderItem" contentTitle="Order Item" addModal={OrderItemModal}></UtilityBar>
            <article>
                <OrderItemList orderItemList= {orderItemList} onEditOrderItem={onEditOrderItem} onDeleteOrderItem ={onDeleteOrderItem}/>
            </article>
         </>
    );
}

export default OrdersPage;