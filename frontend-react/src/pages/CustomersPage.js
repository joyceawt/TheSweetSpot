import React, { useEffect, useState } from "react";
import axios from "axios";
import ModalComponent from "../components/Modal";
import AddCustomerForm from "../components/AddCustomerForm";
import UtilityBar from "../components/UtilityBar";
import CustomerList from "../components/CustomerList";

export const allCustomers = async () => {
  return await axios.get("http://localhost:9124/api/customers");
};

export const CustomersPage = () => {
  const [customerList, setCustomerList] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const loadAllCustomers = async () => {
    try {
      const response = await allCustomers();

      setCustomerList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // UPDATE a single Customer
  const onEditCustomer = async () => {
    loadAllCustomers();
  };

  const onFilterCustomers = (searchText) => {
    if (searchText.length > 0) {
      const filteredCustomers = customerList.filter((customer) => {
        return (
          customer.name.toLowerCase().includes(searchText.toLowerCase()) ||
          String(customer.phone).includes(searchText)
        );
      });
      return filteredCustomers;
    } else {
      return customerList;
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
        setCustomerList([...customerList, response.data]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE a single customer
  const onDeleteCustomer = async (customer_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:9124/api/customers/${customer_id}`
      );
      if (response) {
        loadAllCustomers();
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

  const addModal = (
    <ModalComponent
      trigger="add-customer"
      buttonName={<i className="bi bi-plus-lg fs-4" />}
      btnClasses="btn btn-inverse"
      showModal={showAddModal}
      setShowModal={setShowAddModal}
      content={
        <AddCustomerForm
          onAddCust={onAddCustomer}
          setShowModal={setShowAddModal}
        />
      }
      title="Add a new customer"
    />
  );

  return (
    <>
      <section>
        <UtilityBar
          addModal={addModal}
          contentTitle="Customer"
          searchText={searchText}
          setSearchText={setSearchText}
          filterSearch={onFilterCustomers}
          renderSearchBar={true}
        />
      </section>

      <CustomerList
        custList={onFilterCustomers(searchText)}
        onEditCust={onEditCustomer}
        onDeleteCust={onDeleteCustomer}
      />
    </>
  );
};

export default CustomersPage;
