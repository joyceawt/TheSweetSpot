// model after SubscriptionLiist
import React from 'react';

import Drink from '../components/Drink';
function DrinkList({ drinkLists, onEditDrink, onDeleteDrinks}) {

    console.log("DrinkList", drinkLists);
    // self note: {drinkArgs} are the arguments.
    return (
    <div class="d-flex flex-column justify-content-evenly custom-size" >
        {drinkLists.map((drinkArgs, i) => 
            <Drink 
                key={i}
                drink={drinkArgs} 
                onEditDrink={onEditDrink}
                onDeleteDrinks={onDeleteDrinks} 
            />)
        }
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