import React, { useEffect, useState } from "react";
import UtilityBar from "../components/UtilityBar";
import Modal from "../components/Modal";
import OrderForm from "../components/AddOrderForm";
import AddOrderItemForm from "../components/AddOrderItemForm";
import axios from "axios";

import OrderList from "../components/OrderList";
import OrderItemList from "../components/OrderItemList";
import DropDownSearchCategoryOrder from "../components/DropDownSearchCategoryOrders";
import DropDownSearchCategoryOrderItems from "../components/DropDownSearchCategoryOrderItems";

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

  //for loading pre-loaded drop down options
  const [customerList, setCustomerList] = useState([]);
  const [drinkList, setDrinkList] = useState([]);

  // load all.
  const loadAllOrders = async () => {
    //setOrderList(orderData);
    //setOrderItemList(orderitemsdata);

    // LOAD ORDER
    try {
      const response = await axios.get("http://localhost:9124/api/orders");
      setOrderList(response.data);
    } catch (err) {
      console.log(err);
    }

    // LOAD ORDERITEMS
    try {
      const response = await axios.get("http://localhost:9124/api/OrderItems");
      setOrderItemList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // load the list of customers - FOR ADDING and EDITING
  const loadAllCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:9124/api/customers");
      setCustomerList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // load the list for DRINKS -- for ADDING and EDITING
  const loadAllDrinks = async () => {
    try {
      const response = await axios.get("http://localhost:9124/api/drinks");
      setDrinkList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // UPDATE a single order
  const onEditOrder = async (_id) => {};

  // DELETE a single customer!.
  const onDeleteOrder = async (_id) => {};

  // UPDATE a single order
  const onEditOrderItem = async (_id) => {};

  // DELETE a single customer!.
  const onDeleteOrderItem = async (_id) => {};

  // LOAD all Orders
  useEffect(() => {
    loadAllOrders();
    loadAllCustomers();
    loadAllDrinks();
  }, []);

  let OrderModal = (
    <Modal
      key="AddOrder"
      trigger="add-order"
      buttonName={<i className="bi bi-plus-lg fs-4" />}
      btnClasses="btn btn-light btn-outline-primary"
      content={<OrderForm customerList={customerList} />}
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

  let dropDownSearchOrder = <DropDownSearchCategoryOrder />;
  let dropDownSearchOrderItem = <DropDownSearchCategoryOrderItems />;

  return (
    <>
      <UtilityBar
        key="AddOrder"
        contentTitle="Orders"
        addModal={OrderModal}
        dropDownOption={dropDownSearchOrder}
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
          customerList={customerList}
        />
      </article>

      <UtilityBar
        key="AddOrderItem"
        contentTitle="Order Item"
        addModal={OrderItemModal}
        dropDownOption={dropDownSearchOrderItem}
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
          drinkList={drinkList}
          orderList={orderList}
        />
      </article>
    </>
  );
}

export default OrdersPage;
