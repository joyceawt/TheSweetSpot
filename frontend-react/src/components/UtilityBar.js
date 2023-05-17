import React from "react";
import SortDropDownMenuList from "./SortDropDownMenuList";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import Select from "./SelectDropdown";

export const UtilityBar = ({
  contentTitle,
  addModal,
  filterCustomers,
  searchText,
  setSearchText,
  dropDownOption,
  renderSearchBar,
  defaultSelected,
  selectOptions,
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
      return (
        <Select
          dropDownOption={dropDownOption}
          defaultSelected={defaultSelected}
          selectOptions={selectOptions}
        />
      );
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
        <div className="pt-3">
          {" "}
          <SortBy />{" "}
        </div>
        <div className="ms-auto pt-4">{filterComponent()}</div>
        <div className="pt-3 pe-2"> {addModal} </div>
      </div>
    </>
  );
};

export default UtilityBar;
