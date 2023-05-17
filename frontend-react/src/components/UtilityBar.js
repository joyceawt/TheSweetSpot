import React from "react";
import SortDropDownMenuList from "./SortDropDownMenuList";
import SearchBar from "./SearchBar";

export const UtilityBar = ({
  contentTitle,
  addModal,
  filterCustomers,
  searchText,
  setSearchText,
  dropDownOption,
  renderSearchBar,
}) => {
  const filterComponent = () => {
    if (renderSearchBar) {
      return (
        <SearchBar
          filterCustomers={filterCustomers}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      );
    } else {
      return SortDropDownMenuList({ dropDownOption });
    }
  };

  return (
    <>
      <div className="d-flex pt-3">
        <div className="pt-4 ">
          <h4>
            <strong>{contentTitle}</strong>
          </h4>
        </div>
        <div className="ms-auto pt-1">{filterComponent()}</div>
        <div className="pt-3 pe-2"> {addModal} </div>
      </div>
    </>
  );
};

export default UtilityBar;
