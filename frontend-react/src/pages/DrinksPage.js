// model after SubscriptionLogPage.js
import React, {useEffect , useState} from 'react';

import UtilityBar from '../components/UtilityBar';
import DrinkList from '../components/DrinkList'
import Modal from '../components/Modal'
import AddDrinkForm from '../components/AddDrinkForm';

// WHEN DB IS CONNECTED, STOP USING drinksData.
import drinksData from '../data/drinksdata';


//import { Modal } from 'bootstrap';
function DrinksPage() {
    //to render the proper sizing of header.. homepage header is different size.
    /*
    useEffect(() => {    
        // Update the document title using the browser API    
        if (window.location.pathname ==="/"){
            document.getElementById("headerDefault").classNameName = "homeOnly";
        }
        else{
            document.getElementById("headerDefault").classNameName = "default";
        }
    });
    */

    const [drinkList, setDrinkList] = useState([]);

    // load all.
    const loadAllDrinks = async () => {
      setDrinkList(drinksData);
      //const response = await fetch('/log');
      //const dataDrinks = await response.json();
      //setDrinkList(dataDrinks);
    } 
      // UPDATE a single drink
    const onEditDrink = async drink_id => {
      console.log("OnEditDrink from DrinksPage. the id was: ", drink_id)

    }


    // DELETE a single drink!. 
    const onDeleteDrinks = async drink_id => {
      console.log("onDeleteDrinks from DrinksPage. the id was: ", drink_id)
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
    }  

    // LOAD all subscriptions
    useEffect(() => {
      loadAllDrinks();
    }, []);

 
    // add button + modal.
    let Add_Button_Modal = <Modal trigger ="add-drink" buttonName={ <i className="bi bi-plus-lg fs-4"/>} btnClasses="btn btn-light btn-outline-primary" content={ < AddDrinkForm/> } title="Add a new Drink" />;


    // Display the page.
    // <DrinkList drinkLists ={drinksData}  onEditDrink={onEditDrink} onDeleteDrinks={onDeleteDrinks} />
    return (
         <section>
            <UtilityBar addModal={ Add_Button_Modal} contentTitle="Drinks"/>
            <DrinkList drinkLists ={drinkList}  onEditDrink={onEditDrink} onDeleteDrinks={onDeleteDrinks} />
            
         </section>
    );
}

export default DrinksPage;