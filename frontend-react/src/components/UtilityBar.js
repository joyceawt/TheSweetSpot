import React from "react";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import Select from "./SelectDropdown";

export const UtilityBar = ({
  contentTitle,
  addModal,
  filterSearch,
  searchText,
  setSearchText,
  defaultOption,
  renderSearchBar,
  selectOptions,
}) => {
  const filterComponent = () => {
    if (renderSearchBar) {
      return (
        <SearchBar
          filterSearch={filterSearch}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      );
    } else {
      return (
        <Select
          selectOptions={selectOptions}
          selectedOption={searchText}
          filterSelect={filterSearch}
          setFilterText={setSearchText}
          defaultFilterValue={defaultOption}
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
        <div className={`ms-auto ${renderSearchBar ? "pt-1" : "pt-4"}`}>
          {filterComponent()}
        </div>
        <div className="pt-3 pe-2"> {addModal} </div>
      </div>
    </>
  );
};

export default UtilityBar;
