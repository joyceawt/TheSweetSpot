import React from "react";
import { Link } from "react-router-dom";
function Nav({ current }) {
  return (
    <ul className="nav nav-underline nav flex-row justify-content-center align-items-center fs-4 ">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <div className="nav-text">Home</div>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/drinks">
          <div className="nav-text">Drinks</div>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/orders">
          <div className="nav-text">Orders</div>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/customers">
          <div className="nav-text">Customers</div>
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
