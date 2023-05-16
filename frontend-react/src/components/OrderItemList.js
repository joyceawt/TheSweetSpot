import React from "react";

import OrderItem from "./OrderItem";

function OrderList({ orderItemList, onEditOrderItem, onDeleteOrderItem, setOI_orderID, setOI_drinkID, setOI_drinkQuantity, setOI_iceLvl, setOI_sugarLvl, setOI_dairyOpt, setOI_bobaOpt }) {
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
              <th>Drink QTY</th>
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
                setOI_orderID={setOI_orderID}
                setOI_drinkID={setOI_drinkID}
                setOI_drinkQuantity={setOI_drinkQuantity}
                setOI_iceLvl={setOI_iceLvl}
                setOI_sugarLvl={setOI_sugarLvl}
                setOI_dairyOpt={setOI_dairyOpt}
                setOI_bobaOpt={setOI_bobaOpt}
              />
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
}

export default OrderList;
