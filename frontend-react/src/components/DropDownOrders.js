import React from 'react';

function DropDownOrders({orders}) {
    
    return (
       <>
            <option value={orders.order_id}> {orders.order_id} </option>
       </>
    );
}

export default DropDownOrders;