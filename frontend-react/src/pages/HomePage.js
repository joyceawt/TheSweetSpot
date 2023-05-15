import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
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
  return (
    <section
      classNameName="d-flex flex-column align-content-center justify-content-center custom-size  pt-4 pb-4"
      id="mainContent"
    >
      <article
        className="d-flex flex-column align-content-center justify-content-center rounded bg-white p-1"
        id="content-1"
      >
        <div className="p-3">
          <h4 className="footer-font-color">Overview</h4>
          <p className="lh-lg">
            Welcome. The main functionality of this webpage is to add, edit, and
            delete drink items. You may also view customer's Orders, OrderItems,
            and Customers information.
          </p>
        </div>

        <div className="row p-4 ">
          <div className="col-sm-6 p-3">
            <div className="card text-center bg-white">
              <div className="card-body ">
                <h5 className="card-title">Drinks table</h5>
                <p className="card-text">
                  Shows a list of all drinks. Contains drink ID, drink name,
                  drink description, and drink price.s
                </p>
                <Link to="/drinks" className="btn btn-primary">
                  Manage drinks
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6 p-3">
            <div className="card text-center bg-white">
              <div className="card-body">
                <h5 className="card-title">Orders Table</h5>
                <p className="card-text">
                  Returns a table of all orders. Contains the order ID, Customer
                  ID, order date, and total.{" "}
                </p>
                <Link className="btn btn-primary" to="/orders">
                  Checkout the list of orders
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6 p-3">
            <div className="card text-center bg-white">
              <div className="card-body">
                <h5 className="card-title">OrderItems Table</h5>
                <p className="card-text">
                  Intersection table between Orders table and the Drinks table.
                </p>
                <Link className="btn btn-primary" to="/orders">
                  Go to the detailed list
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6 p-3">
            <div className="card text-center bg-white">
              <div className="card-body">
                <h5 className="card-title">Customers Table</h5>
                <p className="card-text">
                  Contains all of the information regarding the customer.
                  Cointains ID, name, and phone number.
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
