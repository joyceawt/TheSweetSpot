import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const date = new Date().getHours();
  const greeting =
    date < 12 ? "Good Morning" : date < 18 ? "Good Afternoon" : "Good Evening";
  const icon =
    date < 12 ? (
      <i className="greeting bi bi-brightness-alt-low-fill"></i>
    ) : date < 18 ? (
      <i className="greeting bi bi-brightness-high-fill"></i>
    ) : (
      <i className="greeting bi bi-moon-stars-fill"></i>
    );

  return (
    <section
      className="d-flex flex-column align-content-center justify-content-center custom-size  pt-4 pb-4"
      id="mainContent"
    >
      <article
        className="d-flex flex-column align-content-center justify-content-center rounded p-1"
        id="content-1"
      >
        <div className="p-3">
          <h4 className="footer-font-color">
            {greeting} {icon}
          </h4>
          <p className="lh-lg">
            Welcome to The Sweet Spot's Order Management Site.
          </p>
        </div>

        <div className="p-3 row justify-content-center">
          <div className="col-sm-2 p-3">
            <div className="analytics card text-center bg-purple">
              <div className="card-body">
                <h5 className="card-title">Today's Orders</h5>
                <h3 className="card-text">10</h3>
                <p className="card-text"> Orders</p>
              </div>
            </div>
          </div>

          <div className="col-sm-2 p-3">
            <div className="analytics card text-center bg-purple">
              <div className="card-body">
                <h5 className="card-title">Total Orders</h5>
                <h3 className="card-text">10</h3>
                <p className="card-text"> this year</p>
              </div>
            </div>
          </div>

          <div className="col-sm-2 p-3">
            <div className="analytics card text-center bg-purple">
              <div className="card-body">
                <h5 className="card-title">Most Popular</h5>
                <h3 className="card-text">10</h3>
                <p className="card-text"> drink on menu</p>
              </div>
            </div>
          </div>

          <div className="col-sm-2 p-3">
            <div className="analytics card text-center bg-purple">
              <div className="card-body">
                <h5 className="card-title">Total Customers</h5>
                <h3 className="card-text">10</h3>
                <p className="card-text"> to date</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row p-4 ">
          <div className="col-sm-6 p-3">
            <div className="card text-center bg-pink">
              <div className="card-body ">
                <h5 className="card-title">Drinks Table</h5>
                <p className="card-text">
                  Preview all drinks. View the drink ID, drink name, drink
                  description, and prices.
                </p>
                <Link to="/drinks" className="btn btn-primary">
                  Manage drinks
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6 p-3">
            <div className="card text-center bg-pink">
              <div className="card-body">
                <h5 className="card-title">Orders Table</h5>
                <p className="card-text">
                  Preview all orders. View the order ID, Customer ID, order
                  date, and total.{" "}
                </p>
                <Link className="btn btn-primary" to="/orders">
                  Checkout the list of orders
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6 p-3">
            <div className="card text-center bg-pink">
              <div className="card-body">
                <h5 className="card-title">OrderItems Table</h5>
                <p className="card-text">
                  Preview intersection table between Orders table and the Drinks
                  table.
                </p>
                <Link className="btn btn-primary" to="/orders">
                  Go to the detailed list
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6 p-3">
            <div className="card text-center bg-pink">
              <div className="card-body">
                <h5 className="card-title">Customers Table</h5>
                <p className="card-text">
                  Preview all our customers. View their ID, name, and phone
                  number.
                </p>
                <Link className="btn btn-primary" to="/customers">
                  List of customers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default HomePage;
