import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  UtilityBar,
  DrinkList,
  ModalComponent,
  AddDrinkForm,
} from "../components/index";

export const allDrinks = async () => {
  return await axios.get("http://flip3.engr.oregonstate.edu:32346/api/drinks");
};

export const DrinksPage = () => {
  const [drinkList, setDrinkList] = useState([]);
  const [drinkNamesList, setDrinkNamesList] = useState([]);
  const defaultFilterValue = "Filter By Drink Name";
  const [searchText, setSearchText] = useState(defaultFilterValue, "");
  const [showAddModal, setShowAddModal] = useState(false);
  const ariaLabel = "Filter By Drink Name";

  // load all.
  const loadAllDrinks = async () => {
    try {
      const response = await allDrinks();
      setDrinkList(response.data);
      setDrinkNamesList(response.data.map((drink) => drink.drink_name));
    } catch (err) {
      console.log(err);
    }
  };

  // ADD a single Drink
  const onAddDrink = async (drink) => {
    try {
      const response = await axios.post(
        "http://flip3.engr.oregonstate.edu:32346/api/drinks",
        drink
      );
      if (response) {
        setDrinkList([...drinkList, response.data]);
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
        `http://flip3.engr.oregonstate.edu:32346/api/drinks/${drink_id}`
      );
      if (response) {
        loadAllDrinks();
      }
    } catch (err) {
      console.error(`Failed to delete drink with id = ${drink_id}`);
    }
  };

  //filter Drinks
  const onFilterDrinks = (filterName) => {
    if (filterName !== "Filter By Drink Name") {
      const filteredDrinks = drinkList.filter((drink) => {
        return drink.drink_name
          .toLowerCase()
          .includes(filterName.toLowerCase());
      });
      return filteredDrinks;
    } else {
      return drinkList;
    }
  };

  // LOAD all subscriptions
  useEffect(() => {
    loadAllDrinks();
  }, []);

  // add button + modal.
  let AddDrinkModal = (
    <ModalComponent
      trigger="add-drink"
      buttonName={<i className="bi bi-plus-lg fs-4" />}
      btnClasses="btn btn-inverse"
      showModal={showAddModal}
      setShowModal={setShowAddModal}
      content={
        <AddDrinkForm onAddDrink={onAddDrink} setShowModal={setShowAddModal} />
      }
      title="Add a new Drink"
    />
  );

  return (
    <section>
      <UtilityBar
        addModal={AddDrinkModal}
        contentTitle="Drinks"
        renderSearchBar={false}
        searchText={searchText}
        selectOptions={drinkNamesList}
        filterSearch={onFilterDrinks}
        setSearchText={setSearchText}
        defaultOption={defaultFilterValue}
        ariaLabel={ariaLabel}
        id={"drink-filter"}
      />
      <DrinkList
        drinkLists={onFilterDrinks(searchText)}
        onEditDrink={onEditDrink}
        onDeleteDrink={onDeleteDrink}
      />
    </section>
  );
};

export default DrinksPage;
