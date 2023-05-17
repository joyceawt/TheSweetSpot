import React from 'react';

function DropDownDrinks({drinkList}) {
    
    return (
       <>
            <option value={drinkList.drink_id}> {drinkList.drink_id}- {drinkList.drink_name} </option>
       </>
    );
}

export default DropDownDrinks;