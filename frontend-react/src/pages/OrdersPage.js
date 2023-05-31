import React, { useEffect, useState } from "react";
import UtilityBar from "../components/UtilityBar";
import axios from "axios";
import { allCustomers } from "./CustomersPage";
import { allDrinks } from "./DrinksPage";
import ModalComponent from "../components/Modal";
import AddOrderForm from "../components/AddOrderForm";
import AddOrderItemForm from "../components/AddOrderItemForm";
import OrderList from "../components/OrderList";
import OrderItemList from "../components/OrderItemList";

function OrdersPage() {
  const [orderList, setOrderList] = useState([]);
  const [orderItemList, setOrderItemList] = useState([]);
  const [searchText, setSearchText] = useState([]);

  // //for loading pre-loaded drop down options
  const [customerList, setCustomerList] = useState([]);
  const [drinkList, setDrinkList] = useState([]);

  const [showAddOrderModal, setShowAddOrderModal] = useState(false);
  const [showAddOrderItemModal, setShowAddOrderItemModal] = useState(false);

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
    await loadAllOrderItems();
    await loadAllOrders();
  };

  const onEditOrder = async () => {
    await loadAllOrders();
    await loadAllOrderItems();
  };

  const onFilterOrders = (searchText) => {
    if (searchText.length > 0) {
      const filteredOrders = orderList.filter((order) => {
        return order.order_id.toString().includes(searchText);
      });
      return filteredOrders;
    } else {
      return orderList;
    }
  };

  const onFilterOrderItems = (searchText) => {
    if (searchText.length > 0) {
      const filterOrderItems = orderItemList.filter((order_item) => {
        return order_item.order_id.toString().includes(searchText);
      });
      return filterOrderItems;
    } else {
      return orderItemList;
    }
  };

  const onAddOrder = async (order) => {
    try {
      const response = await axios.post("http://localhost:9124/api/orders", {
        customer_id: order.customer_id,
        order_date: order.order_date,
        order_total: order.order_total,
      });
      if (response) {
        setOrderList([...orderList, response.data]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onAddOrderItem = async (order_item) => {
    try {
      const response = await axios.post(
        "http://localhost:9124/api/order_items",
        {
          order_id: order_item.order_id,
          drink_id: order_item.drink_id,
          ice_level: order_item.ice_level,
          sugar_level: order_item.sugar_level,
          dairy_option: order_item.dairy_option,
          drink_quantity: order_item.drink_quantity,
          boba_option: order_item.boba_option,
        }
      );
      if (response) {
        setOrderItemList([...orderItemList, response.data]);
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
    <ModalComponent
      key="AddOrder"
      trigger="add-order"
      buttonName={<i className="bi bi-plus-lg fs-4" />}
      btnClasses="btn btn-inverse"
      showModal={showAddOrderModal}
      setShowModal={setShowAddOrderModal}
      content={
        <AddOrderForm
          customerList={customerList}
          setShowModal={setShowAddOrderModal}
          onAddOrder={onAddOrder}
        />
      }
      title="Add a new Order"
    />
  );

  let OrderItemModal = (
    <ModalComponent
      key="AddOrderItem"
      trigger="add-order-item"
      buttonName={<i className="bi bi-plus-lg fs-4" />}
      btnClasses="btn btn-inverse"
      showModal={showAddOrderItemModal}
      setShowModal={setShowAddOrderItemModal}
      content={
        <AddOrderItemForm
          drinkList={drinkList}
          setShowModal={setShowAddOrderItemModal}
          onAddOrderItem={onAddOrderItem}
        />
      }
      title="Add a new Order Item"
    />
  );

  return (
    <>
      <UtilityBar
        key="AddOrder"
        contentTitle="Orders"
        addModal={OrderModal}
        renderSearchBar={true}
        searchText={searchText}
        setSearchText={setSearchText}
        filterSearch={onFilterOrders}
      ></UtilityBar>

      <article>
        <OrderList
          orderList={onFilterOrders(searchText)}
          onEditOrder={onEditOrder}
          onDeleteOrder={onDeleteOrder}
          customerList={customerList}
          filterSearch={onFilterOrders}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </article>

      <UtilityBar
        key="AddOrderItem"
        contentTitle="Order Item"
        addModal={OrderItemModal}
      ></UtilityBar>

      <article>
        <OrderItemList
          orderItemList={onFilterOrderItems(searchText)}
          onEditOrderItem={onEditOrderItem}
          onDeleteOrderItem={onDeleteOrderItem}
          filterSearch={onFilterOrderItems}
          searchText={searchText}
          drinkList={drinkList}
          orderList={orderList}
        />
      </article>
    </>
  );
}

export default OrdersPage;
