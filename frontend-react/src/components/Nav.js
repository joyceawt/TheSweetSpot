import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div
      className="p2 flex-column flex-shrink-0 bg-light"
      style={{ width: "4.5rem" }}
    >
      <ul className="nav nav-pills nav-flush flex-column text-center nav-underline fs-4">
        <li className="nav-item">
          <NavLink className="nav-link py-3" to="/">
            <i className="bi bi-house" />
          </NavLink>
        </li>
        <li className="nav-item py-3">
          <NavLink className="nav-link" aria-current="page" to="/drinks">
            <svg
              width="30"
              height="30"
              style={{ overflow: "visible" }}
              className="image-svg-svg primary boba-svg"
            >
              <g className="boba-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="96 16 320 480.0000305175781"
                  x="0px"
                  y="0px"
                >
                  <path d="M392,128H288V24a8,8,0,0,0-8-8H232a8,8,0,0,0-8,8V128H120a24.027,24.027,0,0,0-24,24v16a8,8,0,0,0,8,8h16.39l13.339,266.8A55.96,55.96,0,0,0,189.66,496H322.34a55.96,55.96,0,0,0,55.931-53.2L391.61,176H408a8,8,0,0,0,8-8V152A24.028,24.028,0,0,0,392,128ZM240,32h32v96H240Zm0,192V176h32v48Zm-16,0H138.81l-2.4-48H224ZM362.29,442a39.969,39.969,0,0,1-39.95,38H189.66a39.97,39.97,0,0,1-39.95-38l-10.1-202H372.39Zm10.9-218H288V176h87.59ZM400,160H112v-8a8.009,8.009,0,0,1,8-8H392a8.009,8.009,0,0,1,8,8Z"></path>
                  <path d="M192,416a24,24,0,1,0,24,24A24.027,24.027,0,0,0,192,416Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,192,448Z"></path>
                  <path d="M240,384a24,24,0,1,0-24,24A24.027,24.027,0,0,0,240,384Zm-24,8a8,8,0,1,1,8-8A8.009,8.009,0,0,1,216,392Z"></path>
                  <path d="M296,408a24,24,0,1,0-24-24A24.028,24.028,0,0,0,296,408Zm0-32a8,8,0,1,1-8,8A8.009,8.009,0,0,1,296,376Z"></path>
                  <path d="M256,416a24,24,0,1,0,24,24A24.027,24.027,0,0,0,256,416Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,256,448Z"></path>
                  <path d="M320,416a24,24,0,1,0,24,24A24.028,24.028,0,0,0,320,416Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,320,448Z"></path>
                </svg>
              </g>
            </svg>
          </NavLink>
        </li>
        <li className="nav-item py-3">
          <NavLink className="nav-link" aria-current="page" to="/orders">
            <i className="bi bi-table" />
          </NavLink>
        </li>
        <li className="nav-item py-3">
          <NavLink className="nav-link" aria-current="page" to="/customers">
            <i className="bi bi-person-circle" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
