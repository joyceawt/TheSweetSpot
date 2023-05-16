// model after SubscriptionLiist
import React from "react";

import Drink from "../components/Drink";
function DrinkList({ drinkLists, onEditDrink, onDeleteDrinks, setDrinkName, setDrinkDescription, setdrinkPrice }) {
  console.log("DrinkList", drinkLists);
  // self note: {drinkArgs} are the arguments.
  return (
    <div className="d-flex flex-column justify-content-evenly custom-size">
      {drinkLists.map((drinkArgs, i) => (
        <Drink
          key={i}
          drink={drinkArgs}
          onEditDrink={onEditDrink}
          onDeleteDrinks={onDeleteDrinks}
          setDrinkName ={setDrinkName}
          setDrinkDescription={setDrinkDescription}
          setdrinkPrice={setdrinkPrice}
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
