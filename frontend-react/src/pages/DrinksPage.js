// model after SubscriptionLogPage.js
import React, { useEffect, useState } from "react";

import UtilityBar from "../components/UtilityBar";
import DrinkList from "../components/DrinkList";
import Modal from "../components/Modal";
import AddDrinkForm from "../components/AddDrinkForm";

// WHEN DB IS CONNECTED, STOP USING drinksData.
import drinksData from "../data/drinksdata";

function DrinksPage() {
  const [drinkList, setDrinkList] = useState([]);
  const [drinkName, setDrinkName]= useState([]);
  const [drinkDescription, setDrinkDescription]= useState([]);
  const [drinkPrice, setdrinkPrice]= useState([]);


  // load all.
  const loadAllDrinks = async () => {
    setDrinkList(drinksData);
    //const response = await fetch('/log');
    //const dataDrinks = await response.json();
    //setDrinkList(dataDrinks);
  };
  // UPDATE a single drink
  const onEditDrink = async (drink_id) => {
    // query here.
    
  };

  // DELETE a single drink!.
  const onDeleteDrinks = async (drink_id) => {
    
    /*
      const response = await fetch(`/log/${drink_id}`, { method: 'DELETE' });
      if (response.status === 204) {
          const getResponse = await fetch('/log');
          const currentDrinkList = await getResponse.json();
          setDrinkList(currentDrinkList);
      } else {
          console.error(`Failed to delete drink with _id = ${drink_id}, status code = ${response.status}`)
      }
      */
  };

  // LOAD all subscriptions
  useEffect(() => {
    loadAllDrinks();
  }, []);

  // add button + modal.
  let Add_Button_Modal = (
    <Modal
      trigger="add-drink"
      buttonName={<i className="bi bi-plus-lg fs-4" />}
      btnclasses="btn btn-light btn-outline-primary"
      content={<AddDrinkForm />}
      title="Add a new Drink"
    />
  );

  // Display the page.
  // <DrinkList drinkLists ={drinksData}  onEditDrink={onEditDrink} onDeleteDrinks={onDeleteDrinks} />
  return (
    <section>
      <UtilityBar addModal={Add_Button_Modal} contentTitle="Drinks" />
      <DrinkList
        drinkLists={drinkList}
        onEditDrink={onEditDrink}
        onDeleteDrinks={onDeleteDrinks}
        setDrinkName ={setDrinkName}
        setDrinkDescription={setDrinkDescription}
        setdrinkPrice={setdrinkPrice}
      />
    </section>
  );
}

export default DrinksPage;
