import React, { useEffect, useState } from "react";
import UtilityBar from "../components/UtilityBar";
import axios from "axios";
import { allCustomers } from "./CustomersPage";
import { allDrinks } from "./DrinksPage";
import Modal from "../components/Modal";
import OrderForm from "../components/AddOrderForm";
import AddOrderItemForm from "../components/AddOrderItemForm";
import OrderList from "../components/OrderList";
import OrderItemList from "../components/OrderItemList";
import DropDownSearchCategoryOrder from "../components/DropDownSearchCategoryOrders";
import DropDownSearchCategoryOrderItems from "../components/DropDownSearchCategoryOrderItems";

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

  // //for loading pre-loaded drop down options
  const [customerList, setCustomerList] = useState([]);
  const [drinkList, setDrinkList] = useState([]);

  // LOAD ORDERS
  const loadAllOrders = async () => {
    try {
      const response = await axios.get("http://localhost:9124/api/orders");
      setOrderList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadAllOrderItems = async () => {
    try {
      const response = await axios.get("http://localhost:9124/api/order_items");
      setOrderItemList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadAllCustomers = async () => {
    try {
      const response = await allCustomers();

      setCustomerList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadAllDrinks = async () => {
    try {
      const response = await allDrinks();

      setDrinkList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onEditOrderItem = async () => {
    loadAllOrderItems();
  };

  const onEditOrder = async () => {
    loadAllOrders();
    loadAllOrderItems();
  };

  const onAddOrder = async (customer_id, order_date, order_total) => {
    try {
      const response = await axios.post("http://localhost:9124/api/orders", {
        customer_id: customer_id,
        order_date: order_date,
        order_total: order_total,
      });
      if (response) {
        setOrderList(...orderList, response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onAddOrderItem = async (
    order_id,
    drink_id,
    ice_level,
    sugar_option,
    dairy_option,
    drink_quantity,
    order_total
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:9124/api/order_items",
        {
          order_id: order_id,
          drink_id: drink_id,
          ice_level: ice_level,
          sugar_option: sugar_option,
          dairy_option: dairy_option,
          drink_quantity: drink_quantity,
          order_total: order_total,
        }
      );
      if (response) {
        setOrderItemList(...orderItemList, response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE a single order
  const onDeleteOrder = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:9124/api/orders/${id}`
      );
      if (response) {
        loadAllOrders();
        loadAllOrderItems();
      }
    } catch (err) {
      console.log(`Failed to delete order with id: ${id}`);
    }
  };

  // delete a single order item
  const onDeleteOrderItem = async (orders_item_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:9124/api/order_items/${orders_item_id}`
      );
      if (response) {
        loadAllOrderItems();
      }
    } catch (err) {
      console.error(`Failed to delete customer with id = ${orders_item_id}`);
    }
  };

  // LOAD all Orders
  useEffect(() => {
    loadAllOrders();
    loadAllOrderItems();
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
        renderSearchBar={true}
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
        renderSearchBar={true}
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
