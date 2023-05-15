import React, {useEffect, useState} from 'react';

import Modal from '../components/Modal';
import AddCustomerForm from '../components/AddCustomerForm';
import UtilityBar from '../components/UtilityBar';
import CustomerList from '../components/CustomerList';

// STATIC DATA FOR CUSTOMERS. DO NOT USE WHEN DB IS CONNECTED.
import customerdata from '../data/customerdata'
function CustomersPage() {
    //to render the proper sizing of header.. homepage header is different size.
    /*
    useEffect(() => {    
        // Update the document title using the browser API    
        if (window.location.pathname ==="/"){
            document.getElementById("headerDefault").className = "homeOnly";
        }
        else{
            document.getElementById("headerDefault").className = "default";
        }
    });
    */


    const [customerList, setCustomerList] = useState([]);

    // load all.
    const loadAllCustomers = async () => {
        setCustomerList(customerdata);
      //const response = await fetch('/log');
      //const dataCustomers = await response.json();
      //setCustomerList(dataCustomers);
    } 
      // UPDATE a single Customer
    const onEditCustomer = async customer_id => {
      console.log("onEdit from CustomersPage. the id was: ", customer_id)

    }


    // DELETE a single customer!. 
    const onDeleteCustomer = async customer_id => {
      console.log("onDelete from CustomersPage. the id was: ", customer_id)
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
        loadAllCustomers();
    }, []);

     // add button + modal.

     let Add_Button_Modal = <Modal trigger ="add-customer" buttonName={ <i className="bi bi-plus-lg fs-4"/>} btnClasses="btn btn-light btn-outline-primary" content={ < AddCustomerForm/> } title="Add a new customer" />;
    return (
         <>
         <section>
            <UtilityBar addModal={ Add_Button_Modal} contentTitle="Customer"/>
         </section>

         <CustomerList custList = {customerList} onEditCust={onEditCustomer} onDeleteCust={onDeleteCustomer}/>
         </>
    );
}

export default CustomersPage;