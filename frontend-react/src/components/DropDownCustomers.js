import React from 'react';

function DropDownCustomers({customerList}) {
    
    return (
       <>
            <option value={customerList.customer_id}> {customerList.customer_id} - {customerList.name} </option>
       </>
    );
}

export default DropDownCustomers;