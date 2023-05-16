import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../components/Modal";
import AddCustomerForm from "../components/AddCustomerForm";
import UtilityBar from "../components/UtilityBar";
import CustomerList from "../components/CustomerList";

function CustomersPage() {
  const [customerList, setCustomerList] = useState([]);

  const redirect = useNavigate();

  const loadAllCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:9124/api/customers");

      setCustomerList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // ADD a single Customer
  const onAddCustomer = async (customer) => {
    try {
      const response = await axios.post(
        "http://localhost:9124/api/customers",
        customer
      );
      if (response) {
        const customers = await loadAllCustomers();
        setCustomerList(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // UPDATE a single Customer
  const onEditCustomer = async (customer) => {
    let newList = customerList;
    newList[customer.customer_id - 1] = customer;
    setCustomerList(newList);
  };

  // DELETE a single customer!.
  const onDeleteCustomer = async (customer_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:9124/api/customers/${customer_id}`
      );
      if (response) {
        const customers = await loadAllCustomers();
        setCustomerList(response.data);
      }
    } catch (err) {
      console.error(`Failed to delete customer with id = ${customer_id}`);
    }
  };

  //LOAD all subscriptions
  useEffect(() => {
    loadAllCustomers();
  }, []);

  // add button + modal.

  let Add_Button_Modal = (
    <Modal
      trigger="add-customer"
      buttonName={<i className="bi bi-plus-lg fs-4" />}
      btnClasses="btn btn-light btn-outline-primary"
      content={<AddCustomerForm onAddCust={onAddCustomer} />}
      title="Add a new customer"
    />
  );
  return (
    <>
      <section>
        <UtilityBar addModal={Add_Button_Modal} contentTitle="Customer" />
      </section>

      <CustomerList
        custList={customerList}
        onEditCust={onEditCustomer}
        onDeleteCust={onDeleteCustomer}
      />
    </>
  );
}

export default CustomersPage;
