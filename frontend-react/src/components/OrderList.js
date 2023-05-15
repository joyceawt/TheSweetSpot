import React from "react";

import Order from "./Order";

function OrderList({ orderList, onEditOrder, onDeleteOrder }) {
  return (
    <>
      <article className="card table-responsive bg-white ">
        <table className="table table-striped table-hover">
          <caption></caption>
          <thead className="thead-dark">
            <tr>
              <th></th>
              <th>OrderID</th>
              <th>CustomerID</th>
              <th>Order Date</th>
              <th>Total</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {orderList.map((orderArgs, i) => (
              <Order
                key={i}
                order={orderArgs}
                onEditOrder={onEditOrder}
                onDeleteOrder={onDeleteOrder}
              />
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
}

export default OrderList;
