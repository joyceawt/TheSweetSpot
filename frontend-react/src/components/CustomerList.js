// model after SubscriptionList
import React from "react";
import Customer from "./Customer";

function CustomerList({ custList, onEditCust, onDeleteCust }) {
  return (
    <section className="d-flex flex-column justify-content-evenly custom-size">
      <article className="card table-responsive bg-white">
        <table className="table table-striped table-hover">
          <caption></caption>
          <thead className="thead-dark">
            <tr>
              <th>info</th>
              <th>CustomerID</th>
              <th>Name</th>
              <th>Phone number</th>
              <th style={{ width: "12%" }}>Option</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {custList.map((customer, i) => (
              <Customer
                key={i}
                customer={customer}
                onEditCust={onEditCust}
                onDeleteCust={onDeleteCust}
              />
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}

export default CustomerList;
