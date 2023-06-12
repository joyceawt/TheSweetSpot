import React from "react";
import { SelectDropdown, SearchBar } from "./index";

export const UtilityBar = ({
  contentTitle,
  addModal,
  filterSearch,
  searchText,
  setSearchText,
  defaultOption,
  renderSearchBar = null,
  selectOptions,
  ariaLabel,
  id,
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
    } else if (renderSearchBar === false) {
      return (
        <SelectDropdown
          selectOptions={selectOptions}
          selectedOption={searchText}
          filterSelect={filterSearch}
          setFilterText={setSearchText}
          defaultFilterValue={defaultOption}
          ariaLabel={ariaLabel}
          id={id}
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
        <div className={`ms-auto ${renderSearchBar ? "pt-1" : "pt-4"}`}>
          {filterComponent()}
        </div>
        <div className="pt-3 pe-2 me-3"> {addModal} </div>
      </div>
    </>
  );
};

export default UtilityBar;
