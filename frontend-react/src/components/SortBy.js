import React from "react";

function SortBy({ Args }) {
  return (
    <div className="dropdown me-auto p-1">
      <button
        className="btn"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {" "}
        <i className="bi bi-filter fs-5"></i>
      </button>
      <div className="dropdown-menu">
        <li>
          <h6 className="dropdown-header">Sort by</h6>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            ...
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            ...
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            ...
          </a>
        </li>
      </div>
    </div>
  );
}

export default SortBy;
