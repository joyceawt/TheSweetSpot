import React from "react";

import OrderItem from "./OrderItem";

function OrderList({
  orderItemList,
  onEditOrderItem,
  onDeleteOrderItem,
  drinkList,
  orderList,
}) {
  return (
    <>
      <article className="card table-responsive bg-white ">
        <table className="table table-striped table-hover">
          <caption></caption>
          <thead className="thead-dark">
            <tr>
              <th></th>
              <th>order_items_id</th>
              <th>Order ID</th>
              <th>Drink ID</th>
              <th>Drink Qty</th>
              <th>Ice level</th>
              <th>Sugar level</th>
              <th>Dairy option</th>
              <th>Boba option</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {orderItemList.map((orderItemArgs, i) => (
              <OrderItem
                key={i}
                orderItem={orderItemArgs}
                onEditOrderItem={onEditOrderItem}
                onDeleteOrderItem={onDeleteOrderItem}
                drinkList={drinkList}
                orderList={orderList}
              />
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
}

export default OrderList;
