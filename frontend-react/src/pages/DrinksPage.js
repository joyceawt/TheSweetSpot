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

  // ADD a single Drink
  const onAddDrink = async (drink) => {
    debugger;
    try {
      const response = await axios.post(
        "http://localhost:9124/api/drinks",
        drink
      );
      if (response) {
        setDrinkList(...drinkList, response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // UPDATE a single drink
  const onEditDrink = async () => {
    loadAllDrinks();
  };

  // DELETE a single drink
  const onDeleteDrink = async (drink_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:9124/api/drinks/${drink_id}`
      );
      if (response) {
        loadAllDrinks();
      }
    } catch (err) {
      console.error(`Failed to delete drink with id = ${drink_id}`);
    }
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
      content={<AddDrinkForm onAddDrink={onAddDrink} />}
      title="Add a new Drink"
    />
  );

  let dropDownSearch = <DropDownSearchCategoryDrinks />;

  // Display the page.
  // <DrinkList drinkLists ={drinksData}  onEditDrink={onEditDrink} onDeleteDrink={onDeleteDrink} />
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
        onDeleteDrink={onDeleteDrink}
      />
    </section>
  );
}

export default DrinksPage;
