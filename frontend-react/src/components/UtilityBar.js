import React from "react";

import SearchBar from "./SearchBar";
function UtilityBar({
  contentTitle,
  addModal,
  filterCustomers,
  searchText,
  setSearchText,
}) {
  return (
    <>
      <div className="d-flex pt-3">
        <div className="pt-4 ">
          <h4>
            <strong>{contentTitle}</strong>
          </h4>
        </div>
        <div className="ms-auto pt-1">
          <SearchBar
            filterCustomers={filterCustomers}
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </div>
        <div className="pt-3 pe-2"> {addModal} </div>
      </div>
    </>
  );
}

export default UtilityBar;
