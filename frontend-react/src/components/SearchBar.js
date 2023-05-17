import React from "react";

function SearchBar({dropDownOption, defaultSelected }) {
  return (
    <div className="p-1 d-inline-flex">
      <div className="input-group p-2" id="searchTextDiv">
        <span className="input-group-text">
            <i className="bi bi-search fs-4" />
        </span>

        <select class="form-select bg-light" style={{ width: "10%" }} aria-label="Search-by-category" >
            {dropDownOption}
        </select>

        <input
            className="form-control bg-white w-50"
            id="searchInput"
            type="search"
            placeholder="Search"
            aria-label="Search"
        />

      </div>
    </div>
  );
}

export default SearchBar;
