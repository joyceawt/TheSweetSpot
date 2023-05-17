// model after SubscriptionLiist
import React from "react";

import Drink from "../components/Drink";
function DrinkList({ drinkLists, onEditDrink, onDeleteDrink }) {
  // self note: {drinkArgs} are the arguments.
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

/*

            <tbody>
                {subsList.map((subsArg, i) => 
                    <Subscription 
                        key={i}
                        subsList={subsArg} 
                        onSubsEdit={onSubsEdit}
                        onSubsDelete={onSubsDelete} 
                    />)}
            </tbody>

            */
