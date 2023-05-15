import React from 'react';

function SearchBar({etc}) {
    
    return (
        <div class="p-1 d-inline-flex">  
            <div className="input-group p-2" id="searchTextDiv">
                <input className="form-control bg-light" id="searchInput" type="search" placeholder="Search" aria-label="Search"/>
                <span className="input-group-text"><i className="bi bi-search fs-4"/></span>
            </div>
        </div>
    );
}

export default SearchBar;



