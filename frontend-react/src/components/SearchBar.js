import React from "react";

export const SearchBar = ({ filterCustomers, searchText, setSearchText }) => {
  const handleChange = (e) => {
    setSearchText(e.target.value);
    filterCustomers(e.target.value);
  };

  return (
    <div className="p-1 d-inline-flex">
      <div className="input-group p-2" id="searchTextDiv">
        <span className="input-group-text">
          <i className="bi bi-search fs-4" />
        </span>
        <input
          className="form-control bg-white w-50"
          id="searchInput"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchText}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
