import React from 'react';

function DropDownSearchCategoryOrder() {
    
    return (
       <>
            <option value="customer_id">OrderID</option>
            <option value="name">CustomerID</option>
            <option value="name">&lt;OrderDate</option>
            <option value="name">&#61;OrderDate</option>
            <option value="name">&gt;OrderDate</option>
       </>
    );
}

export default DropDownSearchCategoryOrder;