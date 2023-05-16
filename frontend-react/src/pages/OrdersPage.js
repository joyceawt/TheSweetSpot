import React, { useEffect, useState } from "react";
import UtilityBar from "../components/UtilityBar";
import Modal from "../components/Modal";
import OrderForm from "../components/AddOrderForm";
import AddOrderItemForm from "../components/AddOrderItemForm";

import OrderList from "../components/OrderList";
import OrderItemList from "../components/OrderItemList";

//DELETE THE STATIC DATA BELOW WHEN CONNECTED TO DB!!
import orderData from "../data/orderdata";
import orderitemsdata from "../data/orderitemsdata";
function OrdersPage() {
  const [orderList, setOrderList] = useState([]);
  const [orderItemList, setOrderItemList] = useState([]);

  // Order states
  const [orderID, setOrderID] = useState([]);
  const [orderCustomerID, setCustomerID] = useState([]);
  const [orderDate, setOrderDate] = useState([]);
  const [total, setTotal] = useState([]);

  // OrderItem states. OI = OrderItems
  const [OI_orderID, setOI_orderID] = useState([]);
  const [OI_drinkID, setOI_drinkID] = useState([]);
  const [OI_drinkQuantity, setOI_drinkQuantity] = useState([]);
  const [OI_iceLvl, setOI_iceLvl] = useState([]);
  const [OI_sugarLvl, setOI_sugarLvl] = useState([]);
  const [OI_dairyOpt, setOI_dairyOpt] = useState([]);
  const [OI_bobaOpt, setOI_bobaOpt] = useState([]);

  // load all.
  const loadAllOrders = async () => {
    setOrderList(orderData);
    setOrderItemList(orderitemsdata);
  };
  // UPDATE a single order
  const onEditOrder = async (_id) => {};

  // DELETE a single customer!.
  const onDeleteOrder = async (_id) => {};

  // UPDATE a single order
  const onEditOrderItem = async (_id) => {};

  // DELETE a single customer!.
  const onDeleteOrderItem = async (_id) => {};
  // LOAD all subscriptions
  useEffect(() => {
    loadAllOrders();
  }, []);

  let OrderModal = (
    <Modal
      key="AddOrder"
      trigger="add-order"
      buttonName={<i className="bi bi-plus-lg fs-4" />}
      btnClasses="btn btn-light btn-outline-primary"
      content={<OrderForm />}
      title="Add a new Order"
    />
  );

  let OrderItemModal = (
    <Modal
      key="AddOrderItem"
      trigger="add-order-item"
      buttonName={<i className="bi bi-plus-lg fs-4" />}
      btnClasses="btn btn-light btn-outline-primary"
      content={<AddOrderItemForm />}
      title="Add a new Order Item"
    />
  );

  return (
    <>
      <UtilityBar
        key="AddOrder"
        contentTitle="Orders"
        addModal={OrderModal}
      ></UtilityBar>

      <article>
        <OrderList
          orderList={orderList}
          onEditOrder={onEditOrder}
          onDeleteOrder={onDeleteOrder}
          setOrderID={setOrderID}
          setCustomerID={setCustomerID}
          setOrderDate={setOrderDate}
          setTotal={setTotal}
        />
      </article>

      <UtilityBar
        key="AddOrderItem"
        contentTitle="Order Item"
        addModal={OrderItemModal}
      ></UtilityBar>

      <article>
        <OrderItemList
          orderItemList={orderItemList}
          onEditOrderItem={onEditOrderItem}
          onDeleteOrderItem={onDeleteOrderItem}
          setOI_orderID={setOI_orderID}
          setOI_drinkID={setOI_drinkID}
          setOI_drinkQuantity={setOI_drinkQuantity}
          setOI_iceLvl={setOI_iceLvl}
          setOI_sugarLvl={setOI_sugarLvl}
          setOI_dairyOpt={setOI_dairyOpt}
          setOI_bobaOpt={setOI_bobaOpt}
        />
      </article>
    </>
  );
}

export default OrdersPage;
