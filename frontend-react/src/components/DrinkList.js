import React from "react";

import Drink from "../components/Drink";
function DrinkList({ drinkLists, onEditDrink, onDeleteDrink }) {
  return (
    <div className="d-flex flex-column justify-content-evenly custom-size">
      {drinkLists.map((drinkArgs, i) => (
        <Drink
          key={i}
          drink={drinkArgs}
          onEditDrink={onEditDrink}
          onDeleteDrink={onDeleteDrink}
        />
      ))}
    </div>
  );
}

export default DrinkList;
