import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/main.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";

// components
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
// Pages
import HomePage from "./pages/HomePage";
import DrinksPage from "./pages/DrinksPage";
import OrdersPage from "./pages/OrdersPage";
import CustomersPage from "./pages/CustomersPage";

function App() {
  const title = "The Sweet Spot";

  const [orderList, setOrderList] = useState([]);
  const [orderItem, setOrderItems] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  return (
    <div className="App">
      <head>
        <title>The Sweet Spot </title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
          integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
          integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ"
          crossorigin="anonymous"
        />
      </head>

      <div className="d-flex flex-column  align-items-center justify-content-center">
        <BrowserRouter>
          <Header title={title} />
          <Nav />

          <main className="custom-size">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/drinks" element={<DrinksPage />}></Route>

              <Route path="/orders" element={<OrdersPage />}></Route>

              <Route path="/customers" element={<CustomersPage />}></Route>

              {/* <Route path="/subscriptionupdate" element={<SubscriptionLogEditPage subsListEdit={subscriptionListEdit} />} /> */}
            </Routes>
          </main>
        </BrowserRouter>

        <Footer />
      </div>
    </div>
  );
}

export default App;
