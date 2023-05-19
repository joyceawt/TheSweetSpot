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

  return (
    <div className="App">
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
