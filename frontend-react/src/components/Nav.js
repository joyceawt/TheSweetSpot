import React from 'react';
import { Link } from 'react-router-dom';
function Nav({current}) {
    /***
     * 
     *  <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="../subscriptionlog">Logs</Link>
        <Link to="../gallery">Gallery</Link>
        <Link to="../order">Order</Link>
        <Link to="../staff">Staff</Link>
     *  */ 
    return (

            <ul className="nav nav-underline nav flex-row justify-content-center align-items-center fs-4 ">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/drinks">Drinks</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/orders">Orders</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/customers">Customers</Link>
                </li>
            </ul>

    );
}

export default Nav;



