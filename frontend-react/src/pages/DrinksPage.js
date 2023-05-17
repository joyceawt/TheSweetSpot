// model after SubscriptionLogPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import UtilityBar from "../components/UtilityBar";
import DrinkList from "../components/DrinkList";
import Modal from "../components/Modal";
import AddDrinkForm from "../components/AddDrinkForm";
import DropDownSearchCategoryDrinks from "../components/DropDownSearchCategoryDrinks";

function DrinksPage() {
  const [drinkList, setDrinkList] = useState([]);
  const [drinkName, setDrinkName] = useState([]);
  const [drinkDescription, setDrinkDescription] = useState([]);
  const [drinkPrice, setdrinkPrice] = useState([]);
  const [drinkNamesList, setDrinkNamesList] = useState([]);

  // load all.
  const loadAllDrinks = async () => {
    try {
      const response = await axios.get("http://localhost:9124/api/drinks");
      setDrinkList(response.data);
      setDrinkNamesList(response.data.map((drink) => drink.drink_name));
    } catch (err) {
      console.log(err);
    }
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
      btnClasses="btn btn-light btn-outline-primary"
      content={<AddDrinkForm />}
      title="Add a new Drink"
    />
  );

  let dropDownSearch = <DropDownSearchCategoryDrinks />;

  // Display the page.
  // <DrinkList drinkLists ={drinksData}  onEditDrink={onEditDrink} onDeleteDrinks={onDeleteDrinks} />
  return (
    <section>
      <UtilityBar
        addModal={Add_Button_Modal}
        contentTitle="Drinks"
        renderSearchBar={false}
        dropDownOption={dropDownSearch}
        defaultSelected="name"
        selectOptions={drinkNamesList}
      />
      <DrinkList
        drinkLists={drinkList}
        onEditDrink={onEditDrink}
        onDeleteDrinks={onDeleteDrinks}
        setDrinkName={setDrinkName}
        setDrinkDescription={setDrinkDescription}
        setdrinkPrice={setdrinkPrice}
      />
    </section>
  );
}

export default DrinksPage;
